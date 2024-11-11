import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import InventoryModel from "../models/inventory.model";


export class GetInventoryHandler extends RequestHandler {

    private kacheKey = 'inventory';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await InventoryModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}