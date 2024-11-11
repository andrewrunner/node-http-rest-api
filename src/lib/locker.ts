
export class Locker {

    private keys = new Set();

    isLock(key:string) {
        //console.log('isLock', this.#keys.has(key))
        return this.keys.has(key);
    }

    lock(key:string) {
        //console.log('lock', key)
        this.keys.add(key);
    }

    unlock(key:string) {
        //console.log('unlock', key)
        this.keys.delete(key);
    }

    async waitUntilUnlock(key:string, ttl:number|null = null) {
       //console.log('waitUntilUnlock', key)
        while(this.isLock(key)) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
}