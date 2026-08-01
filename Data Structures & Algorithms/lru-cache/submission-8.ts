class LRUCache {
    /**
     * @param {number} capacity
     */
    capacity: number;
    map: Map<number, number>
    constructor(capacity: number) {
        this.capacity = capacity
        this.map = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(this.map.has(key)){
            let val = this.map.get(key); 
            this.map.delete(key);
            this.map.set(key, val); 
            return val;
        }

        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if(this.map.has(key)){
            this.map.delete(key);
            this.map.set(key, value)
            return;
        }

        if(this.map.size >= this.capacity){
            // remove a lru
            this.map.delete(this.map.keys().next().value)
        }

        this.map.set(key, value)
    }
}
