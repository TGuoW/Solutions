/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var res = []
    function help (node) {
        if (!node) return
        help(node.left)
        help(node.right)
        res.push(node.val)
    }
    help(root)
    return res
};