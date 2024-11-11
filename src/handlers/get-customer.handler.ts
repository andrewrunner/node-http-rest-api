import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import CustomerModel from "../models/customer.model";


export class GetCustomerHandler extends RequestHandler {

    private kacheKey = 'customer';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await CustomerModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}