/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head
    var res = new ListNode(null)
    var a = res
    while (head && head.next) {
        if (head.val === head.next.val) {
            while (head && head.next && (head.val === head.next.val)) {
                head = head.next
            }
            head = head.next
        } else {
            res.next = head
            res = res.next
            head = head.next
        }
    }
    res.next = head
    return a.next
};