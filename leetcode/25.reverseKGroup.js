/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var res = new ListNode(null)
    var a = res
    var s = []
    while (head) {
        s.push(head)
        head = head.next
        if (s.length === k) {
            while (s.length) {
                res.next = s.pop()
                res = res.next
            }
            res.next = head
        }
    }
    res.next = s.length ? s[0] : null
    return a.next
};