import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import CountryModel from "../models/country.model";


export class GetCountryHandler extends RequestHandler {

    private kacheKey = 'country';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await CountryModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}