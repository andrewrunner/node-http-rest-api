import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import ActorModel from "../models/actor.model";


export class GetActorsHandler extends RequestHandler {

    private kacheKey = 'actors';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await ActorModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}