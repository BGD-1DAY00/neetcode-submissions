class ListNode {
    constructor(val, next, prev){
        this.val = val; 
        this.next = next; 
        this.prev = prev; 
    }
}

class MinStack {
    constructor() {
        this.head = new ListNode(-1);
        this.tail = new ListNode(-1);
        this.tail.prev = this.head; 
        this.head.next = this.tail; 
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let node = new ListNode(val);
        if(this.minStack.length == 0 || val <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(val)
        }
        if(this.val < this.min) this.min = node; 
        let curr = this.tail.prev; 
        curr.next = node
        node.prev = curr; 
        node.next = this.tail; 
        this.tail.prev = node; 
    }

    /**
     * @return {void}
     */
    pop() {
        let lastNode = this.tail?.prev;
        if(lastNode.val == this.minStack[this.minStack.length - 1]){
            this.minStack.pop();
        }
        let secondToLastNode = this.tail?.prev?.prev; 
        secondToLastNode.next = lastNode.next; 
        this.tail.prev = secondToLastNode; 
        lastNode.next = null, lastNode.prev = null; 
    }

    /**
     * @return {number}
     */
    top() {
        return this.tail?.prev?.val; 
    }

    /**
     * @return {number}
     */
    getMin() {
        return (this.minStack[this.minStack.length -1] ?? null); 
    }
}
