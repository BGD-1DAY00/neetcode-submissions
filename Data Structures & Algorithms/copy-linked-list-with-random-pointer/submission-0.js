// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let map = new Map(); 
        let curr = head; 

        while(curr){
            let node = new Node(curr.val)
            map.set(curr, node)
            curr = curr.next
        }

        let node = map.get(head), copy = map.get(head);
        curr = head
        while(node){
            node.next = map.get(curr.next)
            node.random = map.get(curr.random)
            node = node.next
            curr = curr.next
        }

        return copy 
    }
}
