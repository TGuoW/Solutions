/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1
    let tmp = newNode = new ListNode(null)
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tmp.next = l1
            l1 = l1.next
        } else {
            tmp.next = l2
            l2 = l2.next
        }
        tmp = tmp.next
    }
    tmp.next = l1 || l2
    return newNode.next
};