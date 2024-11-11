import { IncomingMessage, ServerResponse } from "http";
import { RequestHandler } from "../lib/request/request-handler";
import CategoryModel from "../models/category.model";


export class GetCategoryHandler extends RequestHandler {

    private kacheKey = 'category';

    async handle(req:IncomingMessage, res:ServerResponse) {

        const data = await CategoryModel.findAll();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: data }));
        res.end();


        // const key = '/category';
        
        // const cachedData = await redisClient.get(key)
    
        // console.log('cachedData', cachedData)
          
        // if(cachedData) {
        //   return JSON.parse(cachedData);
        // }
        
        // const data = await CategoryModel.findAll();
        // redisClient.set(key, JSON.stringify(data), {EX: 10});
    
        // return data
    }
}