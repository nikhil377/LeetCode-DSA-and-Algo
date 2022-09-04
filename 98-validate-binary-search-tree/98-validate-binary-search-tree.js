/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SC--O(n) TC--O(n) space complexity is O(n) because it's recursion 
// 1st solution
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if(root==null){
        return true;
    }
    if(root.val<=min || root.val>=max){
        return false;
    }
    
    return isValidBST(root.left,min,root.val) && isValidBST(root.right, root.val, max); 
};


// 2nd solution
// var isValidBST = function(root, min=null, max=null) {
//     if (!root) return true;
//     if (min && root.val <= min.val) return false;
//     if (max && root.val >= max.val) return false;
//     return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
// };