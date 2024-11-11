import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import ActorModel from "../models/actor.model";
import { getCacheKeyFromRequest, sendJsonData } from "../lib/util";


export class GetActorsHandler extends RequestHandler {

    async handle(req:IncomingMessage, res:ServerResponse) {

        const kacheKey  = getCacheKeyFromRequest(req);

        if(this.isFetchingFromDB.isLock(kacheKey)) {
            await this.isFetchingFromDB.waitUntilUnlock(kacheKey);
        }
  
        const cachedData = await this.requestCache.get(kacheKey);
        if(cachedData) {
            return sendJsonData(res, cachedData);
        }
  
        this.isFetchingFromDB.lock(kacheKey);

        const data = await ActorModel.findAll();
  
        this.requestCache.set(kacheKey, data)
        this.isFetchingFromDB.unlock(kacheKey);
  
        return sendJsonData(res, data);
    }
}