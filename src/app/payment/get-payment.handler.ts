import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../../lib/request/request-handler";
import PaymentModel from "./payment.model";
import { getCacheKeyFromRequest, sendJsonData, sendJsonError } from "../../lib/util";

export class GetPaymentHandler extends RequestHandler {

    async handle(req:IncomingMessage, res:ServerResponse) {

        const kacheKey = getCacheKeyFromRequest(req);

        if(this.isFetchingFromDB.isLock(kacheKey)) {
            await this.isFetchingFromDB.waitUntilUnlock(kacheKey);
        }
  
        const cachedData = await this.requestCache.get(kacheKey);
        if(cachedData) {
            return sendJsonData(res, cachedData);
        }
  

        this.isFetchingFromDB.lock(kacheKey);
        try {
            const data = await PaymentModel.findAll();
            this.requestCache.set(kacheKey, data)
            return sendJsonData(res, data);
        } catch(e) {
            return sendJsonError(res)
        } finally {
            this.isFetchingFromDB.unlock(kacheKey);
        }  
    }
}