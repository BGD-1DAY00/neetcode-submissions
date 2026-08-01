class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.arr = [];
        this.cap = capacity; 
        this.length = 0; 
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        console.log("GET I: ", i, " arr: ", this.arr)
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        if(this.arr[i] == null || this.arr[i] == undefined) this.length++
        this.arr[i] = n;
        return; 
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.length >= this.cap) this.resize();
        this.length++
        this.arr.push(n);
    }

    /**
     * @returns {number}
     */
    popback() {
        let val = this.arr[this.arr.length - 1];
        this.length--;
        return val; 
    }

    /**
     * @returns {void}
     */
    resize() {
        let newCap = this.length * 2
        this.cap = newCap; 
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length; 
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.cap
    }
}
