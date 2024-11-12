import { IncomingMessage, ServerResponse } from "http";
import { RequestHandlersCache } from "./request-handlers-cache";
import { Mutex } from "../mutex";


export class RequestHandler {

    protected isFetchingFromDB:Mutex;
    
    constructor(
        protected requestCache:RequestHandlersCache
    ) { 
        this.isFetchingFromDB = new Mutex();
    }

    async handle(req:IncomingMessage, res:ServerResponse) {
        throw new Error('handle(req, res) is not overridden!')
    };
}