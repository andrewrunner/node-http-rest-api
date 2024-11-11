import { InMemoryCache } from '../cache/in-memory-cache';
import { RedisClientType } from "redis";


export class RequestHandlersCache {

    constructor(
        private redisCache:RedisClientType,
        private inMemoryCache:InMemoryCache
    ) {}


    public formCacheKey(route:string, params:any) {
      return route;
    }


    async set(route:string, params:any, data:any, expiration:number) {
      const key = this.formCacheKey(route, params);

      this.inMemoryCache.set(key, data, 5000);
      this.redisCache.set(key, JSON.stringify(data), {EX: expiration});
    }

    async get(route:string, params:any) {

      const key = this.formCacheKey(route, params);
       
      const datafromMemory = await this.inMemoryCache.get(key)
      if(datafromMemory) {
        console.log('return from in-memory cache')
        return datafromMemory;
      }
    
      const dataFromRedis = await this.redisCache.get(key)
      if(dataFromRedis) {
        console.log('return from redis cache')
        return JSON.parse(dataFromRedis);
      }

      return Promise.resolve(null);
    }
}
