import {createClient} from "redis";

const cacheHost = process.env.REDIS_HOST;
const cachePort = process.env.REDIS_PORT;

const redisClient = createClient({url: `redis://${cacheHost}:${cachePort}`});

redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.connect()

export { redisClient };