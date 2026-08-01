class Node { 
    constructor(key, val, next, prev){
        this.key = key
        this.val = val
        this.next = next
        this.prev = prev
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; 
        this.len = 0; 
        this.head = new Node(-1);
        this.tail = new Node(-1);
        this.head.next = this.tail
        this.tail.prev = this.head; 
        this.map = new Map(); 
    }

    get(key) {
        if(!this.map.has(key)) return -1;
        
        let node = this.map.get(key);
        // Remove from current position
        node.prev.next = node.next;
        node.next.prev = node.prev;
        
        // Add to end (most recently used)
        let lastNode = this.tail.prev;
        lastNode.next = node;
        node.prev = lastNode;
        node.next = this.tail;
        this.tail.prev = node;
        
        return node.val;
    }

    put(key, value) {
        // If key exists, update value and move to end
        if(this.map.has(key)) {
            let node = this.map.get(key);
            node.val = value;
            
            // Remove from current position
            node.prev.next = node.next;
            node.next.prev = node.prev;
            
            // Add to end
            let lastNode = this.tail.prev;
            lastNode.next = node;
            node.prev = lastNode;
            node.next = this.tail;
            this.tail.prev = node;
            return;
        }
        
        // Create new node
        let newNode = new Node(key, value);
        this.map.set(key, newNode);
        
        // If at capacity, remove LRU (head.next)
        if(this.len === this.capacity) {
            let lru = this.head.next;
            this.head.next = lru.next;
            lru.next.prev = this.head;
            this.map.delete(lru.key);
            this.len--;
        }
        
        // Add new node to end
        let lastNode = this.tail.prev;
        lastNode.next = newNode;
        newNode.prev = lastNode;
        newNode.next = this.tail;
        this.tail.prev = newNode;
        this.len++;
    }
}