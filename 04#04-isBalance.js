/**
实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。


示例 1:
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
返回 true 。
示例 2:
给定二叉树 [1,2,2,3,3,null,null,4,4]
      1
     / \
    2   2
   / \
  3   3
 / \
4   4
返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-balance-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function(root) {
    function helper(node) {
      if (node === null) return 0;
      
      let left = helper(node.left),
          right = helper(node.right);
      
      return Math.max( left, right ) + 1;
    }
    
    function isbalance(node) {
      if (node === null) return true;
      
      let left = helper(node.left),
          right = helper(node.right);
      
      if (Math.abs(left - right) > 1) return false;
      
      return isbalance(node.left) && isbalance(node.right);
    }
    
    return isbalance(root);
  };