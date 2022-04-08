/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
**/


var isSameTree = function(p, q) {
    // the same if both nodes are null
    if (!p && !q) return true;
    // not the same if either of the nodes is null or the values are different
    if ((!p && q) || (p && !q) || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// var isSameTree = function(p, q) {
//      return JSON.stringify(p)===JSON.stringify(q)
// };
