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
var addTwoNumbers = function(l1, l2) {
    var a1 = []
    var a2 = []
    while (l1) {
        a1.push(l1)
        l1 = l1.next
    }
    while (l2) {
        a2.push(l2)
        l2 = l2.next
    }
    var target = null
    var c = 0
    while (a1.length || a2.length || c) {
        var n1 = a1.pop()
        var n2 = a2.pop()
        var s1 = (n1 && n1.val) || 0
        var s2 = (n2 && n2.val) || 0
        var sum = s1 + s2 + c
        c = sum > 9 ? 1 : 0
        var node = new ListNode(sum % 10)
        node.next = target
        target = node
    }
    return target
};