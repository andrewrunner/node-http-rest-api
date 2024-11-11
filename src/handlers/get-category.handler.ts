import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import CategoryModel from "../models/category.model";
import { getCacheKeyFromRequest, sendJsonData } from "../lib/util";


export class GetCategoryHandler extends RequestHandler {

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

        const data = await CategoryModel.findAll();
  
        this.requestCache.set(kacheKey, data)
        this.isFetchingFromDB.unlock(kacheKey);
  
        return sendJsonData(res, data);  
    }
}