class ListNode{
    constructor(val, nextNode){
        this.val = val;
        this.next = nextNode; 
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1); 
        this.tail = this.head; 
        this.length = 0; 
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.head?.next, currIdx= 0; 
        while(curr != null){
            if(currIdx == index){
                return curr.val; 
            }
            curr = curr.next; 
            currIdx++
        }
        return -1; 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new ListNode(val);
        if(this.head.next == null){
            this.head.next = newNode; 
            this.tail = newNode;
            this.length++
            return;
        }
        newNode.next = this.head.next; 
        this.head.next = newNode;
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new ListNode(val); 
        this.tail.next = newNode; 
        this.tail = this.tail.next; 
        this.length++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(this.length <=0) return false; 
        let curr = this.head.next, currIdx = 0; 
        if(index == 0){
            this.head.next = this.head?.next?.next; 
            this.length--; 
            return true; ; 
        }
        while(curr != null){
            if(currIdx + 1 == index){
                curr.next = curr.next?.next; 
                this.length --; 
                return true; 
            }
            curr = curr.next;
        }
        return false; 
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [], curr = this.head?.next; 
        while(curr != null){
            arr.push(curr.val);
            curr = curr.next; 
        }
        return arr; 
    }
}
