import { IncomingMessage, ServerResponse } from "http";
import { Op } from "sequelize";
import { RequestHandler } from "../lib/request/request-handler";
import FilmModel from "../models/film.model";
import { getCacheKeyFromRequest, getQueryParams, sendJsonData } from "../lib/util";


export class GetFilmHandler extends RequestHandler {

    async handle(req:IncomingMessage, res:ServerResponse) {

        const query     = getQueryParams<{title?:string}>(req);
        const kacheKey  = getCacheKeyFromRequest(req);
        

        if(this.isFetchingFromDB.isLock(kacheKey)) {
          await this.isFetchingFromDB.waitUntilUnlock(kacheKey);
        }

        const cachedData = await this.requestCache.get(kacheKey, query);
        if(cachedData) {
            return sendJsonData(res, cachedData);
        }


        this.isFetchingFromDB.lock(kacheKey);

        const findParams = (query.title)
        ? { where: { title: { [Op.like]: `${query.title}%` }}}
        : {};

        const data = await FilmModel.findAll(findParams);

        this.requestCache.set(kacheKey, query, data, 10)
        this.isFetchingFromDB.unlock(kacheKey);

        return sendJsonData(res, data);
    }
}