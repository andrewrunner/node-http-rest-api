import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import CityModel from "../models/city.model";


export class GetCityHandler extends RequestHandler {

    private kacheKey = 'actors';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await CityModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}