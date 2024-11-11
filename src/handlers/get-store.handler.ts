import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import StoreModel from "../models/store.model";


export class GetStoreHandler extends RequestHandler {

    private kacheKey = 'store';

    async handle(req:IncomingMessage, res:ServerResponse) {
        const data = await StoreModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}