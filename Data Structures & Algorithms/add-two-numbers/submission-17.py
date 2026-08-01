# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        result = ListNode(0)
        pointer = result
        remainder = 0
        while l1 and l2:
            total = l1.val + l2.val + remainder
            if total > 9: 
                total -=10
                remainder = 1
                result.next = ListNode(total)
            else:
                remainder = 0
                result.next = ListNode(total)
            l1 =l1.next
            l2 =l2.next
            result = result.next

        while l1:
            total = remainder + l1.val 
            print(l1.val, total)
            if total > 9:
                total -=10 
                remainder = 1
                result.next = ListNode(total)
            else:
                remainder = 0
                result.next = ListNode(total)
            l1 = l1.next
            result = result.next


        while l2:
            total = remainder + l2.val 
            if total > 9:
                total -=10
                remainder = 1
                result.next = ListNode(total)
            else:
                remainder = 0
                result.next = ListNode(total)
            l2 = l2.next
            result = result.next


        if remainder > 0: 
            result.next = ListNode(1)

        
        return pointer.next
                



        