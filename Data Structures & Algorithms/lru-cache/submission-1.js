class Node { 
    constructor(key, val, next, prev){
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
        this.len = 0; 
        this.head = new Node(-1);
        this.tail = new Node(-1);
        this.head.next = this.tail
        this.tail.prev = this.head; 
        this.map = new Map(); 
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let node = this.map.get(key) ??  -1;  
        if(node == -1) return -1; 
        else{

            // Remove it from place
            const nodePrev = node.prev; 
            const nodeNext = node.next; 
            nodePrev.next = node.next; 
            nodeNext.prev  = nodePrev

            // Pushing it to the end; 
            const lastNode = this.tail.prev; 
            node.next = lastNode.next;
            node.prev = lastNode; 
            lastNode.next = node;
            this.tail.prev = node
        }

        return node.val; 
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    // the end will be the front of our line
    put(key, value) {
        if(this.len < this.capacity){
            let node = this.tail.prev;
            let newNodeToAdd = new Node(key, value);
            newNodeToAdd.next = node.next; 
            newNodeToAdd.prev = node;
            node.next = newNodeToAdd; 
            this.map.set(key, newNodeToAdd)
            this.len++;
        }else{
             // [head]. [one]. [two] [three]
            const firstNode = this.head.next; 
            const secondNode = this.head.next.next; 
            this.head.next = firstNode.next; 
            secondNode.prev = this.head;
            this.len--; 
            this.map.delete(firstNode.key)
            firstNode.next = null, firstNode.prev = null; 


            let node = this.tail.prev;
            let newNodeToAdd = new Node(key, value);
            newNodeToAdd.next = node.next; 
            newNodeToAdd.prev = node;
            node.next = newNodeToAdd; 
            this.map.set(key, newNodeToAdd)
            this.len++;
        }

    }
}
