import { IncomingMessage, ServerResponse } from "http";
import { Op } from "sequelize";
import { RequestHandler } from "../../lib/request/request-handler";
import FilmModel from "./film.model";
import { getCacheKeyFromRequest, getQueryParams, sendJsonData, sendJsonError } from "../../lib/util";

export class GetFilmHandler extends RequestHandler {

    async handle(req:IncomingMessage, res:ServerResponse) {

        const query     = getQueryParams<{title?:string}>(req);
        const kacheKey  = getCacheKeyFromRequest(req);
        

        if(this.isFetchingFromDB.isLock(kacheKey)) {
          await this.isFetchingFromDB.waitUntilUnlock(kacheKey);
        }

        const cachedData = await this.requestCache.get(kacheKey);
        if(cachedData) {
            return sendJsonData(res, cachedData);
        }
        
        const findParams = (query.title)
            ? { where: { title: { [Op.like]: `${query.title}%` }}}
            : {};

            
        this.isFetchingFromDB.lock(kacheKey);
        try {
            const data = await FilmModel.findAll(findParams);
            this.requestCache.set(kacheKey, data)
            return sendJsonData(res, data);
        } catch(e) {
            return sendJsonError(res)
        } finally {
            this.isFetchingFromDB.unlock(kacheKey);
        }
    }
}