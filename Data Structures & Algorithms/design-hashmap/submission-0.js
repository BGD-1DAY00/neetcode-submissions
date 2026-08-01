class MyHashMap {

    constructor() {
        this.size = 769
        this.buckets = Array.from({length: this.size}, ()=> []);
    }

    hashedVal(key){
        return key % this.size
    }

    contains(key){
        let hashedValue = this.hashedVal(key)
        for(let i = 0; i < this.buckets[hashedValue].length; i ++){
            const currBucket = this.buckets[hashedValue][i]
            if(currBucket[0] == key) return [true, i]
        }

        return [false]
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let hashedValue = this.hashedVal(key); 
        let response = this.contains(key)

        //if present then i want to just update the value
        // if not present then create the value
        if(response[0]){
            this.buckets[hashedValue][response[1]] = [key, value]
        }else{
            this.buckets[hashedValue].push([key,value])
        }

        console.log(this.buckets)
        
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let hashedValue = this.hashedVal(key); 
        for(let i = 0; i < this.buckets[hashedValue].length; i++){
            if(this.buckets[hashedValue][i][0] == key) return this.buckets[hashedValue][i][1]
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let hashedValue = this.hashedVal(key); 
        let response = this.contains(key)
        
        for(let i = 0; i < this.buckets[hashedValue].length; i++){
            if(this.buckets[hashedValue][i][0] == key){
                this.buckets[hashedValue].splice(i, 1)
            }
        }
        return null
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
