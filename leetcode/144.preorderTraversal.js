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
var preorderTraversal = function(root) {
    var res = []
    function help (node) {
        if (!node) return
        res.push(node.val)
        help(node.left)
        help(node.right)
    }
    help(root)
    return res
};

var preorderTraversal = function(root) {
    var res = []
    var stack = []
    while (root || stack.length) {
        while (root) {
            res.push(root.val)
            stack.push(root)
            root = root.left
        }
        root = stack.pop().right
    }
    return res
};