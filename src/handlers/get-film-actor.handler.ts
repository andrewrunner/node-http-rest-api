import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import FilmActorModel from "../models/film-actor.model";


export class GetFilmActorHandler extends RequestHandler {

    private kacheKey = 'film-actor';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await FilmActorModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}