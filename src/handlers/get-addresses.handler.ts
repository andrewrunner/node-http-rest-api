import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import AddressModel from "../models/address.model";


export class GetAddressesHandler extends RequestHandler {

    private kacheKey = 'address';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await AddressModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}