import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import PaymentModel from "../models/payment.model";


export class GetPaymentHandler extends RequestHandler {

    private kacheKey = 'payment';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await PaymentModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}