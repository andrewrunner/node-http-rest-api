import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import FilmCategoryModel from "../models/film-category.model";


export class GetFilmCategoryHandler extends RequestHandler {

    private kacheKey = 'film-actor';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await FilmCategoryModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}