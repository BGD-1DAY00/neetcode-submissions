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

        def handle_left_over(l, result, remainder):
            print(remainder, l)
            r = remainder
            while l:
                total = r + l.val 
                if total > 9:
                    total -=10 
                    r = 1
                    result.next = ListNode(total)
                else:
                    r = 0
                    result.next = ListNode(total)
                l = l.next
                result = result.next
            return result

        result = handle_left_over(l1, result, remainder)
        result = handle_left_over(l2, result, remainder)


        if remainder > 0: 
            result.next = ListNode(1)

        
        return pointer.next
                



        