class MyHashSet {

    size: number
    buckets: number[][]

    constructor() {
        this.size = 769  // prime number reduces collisions
        this.buckets = Array.from({length: this.size}, () => [])
    }

    hashVal(key: number): number {
        return key % this.size
    }

    // updateKey(key: number, bucket: number[]) {
    //     for(let i = 0; i < bucket.length; i++){
    //         if(bucket[i] == key){
    //             bucket[i] 
    //         }
    //     }
    // }
    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        let hashedVal = this.hashVal(key)
        // check if it exists and requires update 
        // if it does not exist add
        // if it does exist update bucket
        const bucket = this.buckets[hashedVal]
        if(!this.contains(key)){
            bucket.push(key)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        let hashedVal = this.hashVal(key)
        const bucket = this.buckets[hashedVal]
        for(let i = 0; i < bucket.length; i++){
            if(bucket[i] == key){
                bucket.splice(i, 1)
            }
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        let hashedVal = this.hashVal(key)
        const bucket = this.buckets[hashedVal]
        for(let i = 0; i< bucket.length; i++){
            if(bucket[i] == key) return true
        }
        return false
    }

}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
