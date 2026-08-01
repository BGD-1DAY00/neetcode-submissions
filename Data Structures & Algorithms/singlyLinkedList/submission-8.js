class ListNode {
    val;
    next;
    constructor(val, nextNode = null){
        this.val = val;
        this.next = nextNode;
    }
}

class LinkedList {
    head;
    tail;
    length;
    constructor() {
        this.head = new ListNode();
        this.tail = this.head;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(index == 0 && this.length > 0){
            return this.head.val;
        }
        else if(this.length > 0){
            let i = 0, curr = this.head, result = -1;  
            while(curr != null){
                if(i == index){
                    result = curr.val;
                    break;
                }
                i++;
                curr = curr.next; 
            }

            return result;
        }
        else return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        this.length++;
        let node = new ListNode(val);
        node.next = this.head;
        this.head = node;

    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.length++;
        if(this.length <= 0){
            this.head = new ListNode(val);
            this.tail = this.head
        }else if(this.length = 1){
            this.head.next = new ListNode(val);
            this.tail = this.head.next; 
        }else{
            let curr = this.head; 
            while(curr.next != null){
                curr = curr.next; 
            }
            curr.next = newListNode(val);
            this.tail = curr.next;
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        console.log(this.getValues(), " length: ", this.length)
        let result = false, j = 0; 
        if(this.length <= 0) return false
        if(index == 0 > this.length > 0){
            console.log("here")
            let currHead = this.head;
            this.head = this.head?.next;
            // currHead.next = null;
            result = true;
        }else{
            let curr = this.head;
            while(curr != null){
                if(j + 1 == index){
                    let nextCurr = curr.next;
                    curr.next = curr?.next?.next;
                    nextCurr.next = null; 
                    result = true;
                    break;
                }
                j++;
                curr = curr.next
            }
            return result;
        }
        this.length--;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let arr = [], curr = this.head;
        while(curr != null){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }
}
