import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";

export class TestRequestHandler extends RequestHandler {
    
    async handle(req:IncomingMessage, res:ServerResponse) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        
        res.write(JSON.stringify({
            data: 'Test data...'
        }));
        
        res.end();
    }
}