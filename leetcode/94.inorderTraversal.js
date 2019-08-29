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
var inorderTraversal = function(root) {
    if (!root) return []
    let number = [];
    // 先创建一个栈
    let stack = [];
    let target = root;
    stack.push(target);
    while(true){
      if(stack.length ===0){
        break;
      }
      if(target&&target.left){
        target = target.left;
        stack.push(target)
      }else{
        //弹出栈
        let node = stack.pop();
        number.push(node&&node.val);
        if(node&&node.right){
         target = node.right;
         stack.push(node.right)
        }
      }
    };
  return number
}
