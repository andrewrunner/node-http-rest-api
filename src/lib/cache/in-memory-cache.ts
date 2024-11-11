
export class InMemoryCache {

    cache = new Map(); 
    cacheTTLMap = new Map(); 

    async get(key:string) {

        if (this.cacheTTLMap.has(key) && Date.now() > this.cacheTTLMap.get(key)) {
            this.cache.delete(key);
            this.cacheTTLMap.delete(key);
        }

        if (this.cache.has(key)) {
            const data = this.cache.get(key)
            return Promise.resolve(data);
        }

        return Promise.resolve(null);;
    }

    set(key:string, value:any, ttl:number) {
        this.cache.set(key, value); 
        this.cacheTTLMap.set(key, Date.now() + ttl);
    }
}