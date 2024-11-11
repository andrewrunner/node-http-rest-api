import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import RentalModel from "../models/rental.model";


export class GetRentalHandler extends RequestHandler {

    private kacheKey = 'rental';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await RentalModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}