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
        if (!head) return null;  

        let map = new Map(), curr = head; 
        map.set(null, null)

        while(curr){
            let newNode = new Node(curr.val)
            map.set(curr, newNode);
            curr = curr.next; 
        }

        curr = head; 
        while(curr != null){
            let node = map.get(curr); 
            node.next = map.get(curr?.next);
            node.random = map.get(curr?.random);
            curr = curr.next; 
        }
        console.log(map.get(head))
        return map.get(head);

    }
}
