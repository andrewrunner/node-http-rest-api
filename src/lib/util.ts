import url from "url";
import { IncomingMessage, ServerResponse } from "http";

export function getQueryParams<T>(req:IncomingMessage) {
    const reqUrl = url.parse(req.url!, true);
    return reqUrl.query as T;
}

export async function sendJsonData(res:ServerResponse,  data:any) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ data }));
    res.end();
}

export async function sendJsonError(res:ServerResponse, message:any = null, code:number = 500) {
    res.writeHead(code, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message }));
    res.end();
}

/**
 * Transform pathname and query to kache key string
 * Example:
 * - pathname: /test
 * - query: {title:qwerty, rows:10}
 * - result: '/test/title:qwerty:rows:10' 
 * 
 * @param req - incoming request 
 */
export function getCacheKeyFromRequest(req:IncomingMessage) {
    const reqUrl = url.parse(req.url!, true);
    
    const pathname = reqUrl.pathname!;
    const queryObj = reqUrl.query;

    const queryStr = Object.entries(queryObj)
    .map(([key, value]) => `${key}:${value}`)
    .join(':')

    return pathname + "/" + queryStr;
}