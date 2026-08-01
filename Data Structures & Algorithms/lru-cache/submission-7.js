class Node { 
    constructor(val, key, next, prev){
        this.key = key
        this.val = val
        this.next = next
        this.prev = prev
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity; 
        this.cache = new Map(); 
        this.head = new Node(-1), this.tail = new Node(-1); 
        this.head.next = this.tail, this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            let node = this.cache.get(key)
            this.updateKeyPositionToBack(key, node.val); 
            return node.val; 
        }

        return -1;  
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    // the end will be the front of our line
    put(key, value) {
        if(this.cache.has(key)){
            this.updateValueOfNode(key, value);
            this.updateKeyPositionToBack(key, value); 
        }else if(this.cache.size >= this.capacity){
            this.removeFirstNode(key); 
            this.addNodeToBack(key, value); 
        }else{
            this.addNodeToBack(key, value); 
        }
    }

    updateValueOfNode(key, value){
        let node = this.cache.get(key);
        node.val = value; 
        return; 
    }

    updateKeyPositionToBack(key, value){
        this.removeNode(key), this.addNodeToBack(key, value)
        return; 
    }

    removeNode(key){
        let node = this.cache.get(key); 
        let nodePrev = node.prev; 
        let nodeNext = node.next; 
        nodePrev.next = node.next; 
        nodeNext.prev = node.prev; 
        node.next = null, node.prev = null
        this.cache.delete(key); 
    }

    addNodeToBack(key, value){
        let lastNode = this.tail.prev, newNode = new Node(value, key); 
        newNode.next = this.tail; 
        newNode.prev = lastNode
        lastNode.next = newNode; 
        this.tail.prev = newNode; 
        this.cache.set(key, newNode)
        return; 
    }

    removeFirstNode(key){
        if(this.cache.size >=2){
            let firstNode = this.head.next, second = this.head.next.next; 
            this.head.next = second; 
            second.prev = this.head; 
            firstNode.next = null, firstNode.prev = null; 
            this.cache.delete(firstNode.key)
        }else if(this.cache.size == 1){
            let firstNode = this.head.next;
            this.head.next = this.tail; 
            this.tail.prev = this.head; 
            this.cache.delete(firstNode.key)
        }else return
    }

}


