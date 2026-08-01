class Solution {
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let response = new ListNode(0, null);
        let pointer = response;
        let carry = 0;

        while (l1 != null || l2 != null || carry > 0) {
            const a = l1 ? l1.val : 0;
            const b = l2 ? l2.val : 0;
            const sum = a + b + carry;

            carry = Math.floor(sum / 10);
            pointer.next = new ListNode(sum % 10, null);
            pointer = pointer.next;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return response.next as ListNode;
    }
}