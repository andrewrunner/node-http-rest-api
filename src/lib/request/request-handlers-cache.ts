import { InMemoryCache } from '../cache/in-memory-cache';
import { RedisClientType } from "redis";


export class RequestHandlersCache {

    constructor(
        private redisCache:RedisClientType,
        private inMemoryCache:InMemoryCache
    ) {}

    async get(key:string) {
      
      const datafromMemory = await this.inMemoryCache.get(key)
      if(datafromMemory) {
        console.log(`Get from in-memory cache ${key}`)
        return datafromMemory;
      }
    
      const dataFromRedis = await this.redisCache.get(key)
      if(dataFromRedis) {
        console.log(`Get from redis cache ${key}`)
        return JSON.parse(dataFromRedis);
      }

      return Promise.resolve(null);
    }


    /**
     * @param key - key of data
     * @param data - data to store
     * @param inMemoryExpiration - ttl in-memory cache in seconds (15 seconds default)
     * @param redisExpiration - ttl redis cache in seconds (30 seconds default)
     */
    async set(key:string,  data:any, inMemoryExpiration: number = 15, redisExpiration:number = 30) {
      this.inMemoryCache.set(key, data, inMemoryExpiration);
      this.redisCache.set(key, JSON.stringify(data), {EX: redisExpiration});
    }
}
