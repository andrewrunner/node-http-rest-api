import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import LanguageModel from "../models/language.model";


export class GetLanguageHandler extends RequestHandler {

    private kacheKey = 'language';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await LanguageModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();
    }
}