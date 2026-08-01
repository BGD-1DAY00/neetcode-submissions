class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const store = this.keyStore.has(key) ? this.keyStore.get(key) : [];
        store.push([value, timestamp]);
        this.keyStore.set(key, store);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const store = this.keyStore.get(key) ?? []; 
        if(store && store?.length < 1) return ""
        let left = 0, right = store.length, result = "";  

        while(left <= right){
            const mid = Math.floor((left + right)/2);
            if(store[mid]?.[1] == timestamp){
                return store[mid][0];
            }else if(store[mid]?.[1] < timestamp){
                result = store[mid][0];
                left = mid + 1; 
            }else{
                right = mid - 1
            }
        }
        return result; 
    }
}
