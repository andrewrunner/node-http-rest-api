import { IncomingMessage, ServerResponse } from "http";
import { RequestHandlersCache } from "./request-handlers-cache";
import { Locker } from "../locker";


export class RequestHandler {

    protected isFetchingFromDB:Locker;
    
    constructor(
        protected requestCache:RequestHandlersCache
    ) { 
        this.isFetchingFromDB = new Locker();
    }

    async handle(req:IncomingMessage, res:ServerResponse) {
        throw new Error('handle(req, res) is not overridden!')
    };
}