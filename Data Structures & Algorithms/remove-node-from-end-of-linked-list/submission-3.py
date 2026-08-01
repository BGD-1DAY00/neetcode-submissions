class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        len_list = 0
        pointer_a = head
        while pointer_a:
            len_list += 1
            pointer_a = pointer_a.next

        curr = head
        dummy = None
        op = 1
        while curr:
            if len_list - op == n - 1:
                if dummy is None:
                    return curr.next   
                else:     # deleting the head → new head
                    dummy.next = curr.next
                    curr.next = None
                    break
            else:
                dummy = curr
                curr = curr.next
            op += 1

        return head