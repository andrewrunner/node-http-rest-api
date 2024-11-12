import {createClient, RedisClientType} from "redis";

const cacheHost = process.env.REDIS_HOST;
const cachePort = process.env.REDIS_PORT;

const redisClient:RedisClientType = createClient({url: `redis://${cacheHost}:${cachePort}`});

redisClient.on('error', (err:any) => console.log('Redis Client Error', err));
redisClient.connect()

export { redisClient };