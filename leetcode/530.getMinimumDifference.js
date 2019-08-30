/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    var res
    var pre
    var s = function (root) {
        if (!root) return
        s(root.left)
        if (pre) {
            var tmp = Math.abs(root.val - pre.val)
            res = res > tmp || res === undefined ? tmp : res
        }
        pre = root
        s(root.right)
    }
    s(root)
    return res
};