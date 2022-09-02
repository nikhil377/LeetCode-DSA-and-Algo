/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// TC O(LogN) SP O(1)
var lowestCommonAncestor = function(root, p, q) {
   while(root){
       if(root.val< p.val && root.val<q.val){
           root=root.right
       }else if(root.val> p.val && root.val>q.val){
                root=root.left;
        }
       else break;
   }
    return root;
};

// recursive TC TC O(LogN) SP O(N)

// var lowestCommonAncestor = function(root, p, q) {
//     if (root.val < p.val && root.val < q.val) {
//         return lowestCommonAncestor(root.right, p, q);
//     }
//     if (root.val > p.val && root.val > q.val) {
//         return lowestCommonAncestor(root.left, p, q);
//     }
//     return root;
// };