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
var lowestCommonAncestor = function(root, p, q) {
    let curr=root;
    
    while(curr){
        if(curr.left?.val==p.val && curr.right?.val==q.val){
            return curr;
        }
        if((curr.left?.val==p.val && curr.val==q.val) || (curr.right?.val==q.val && curr.val==p.val)){
            return curr;
        }
        if(curr.val<q.val){
            // move right
            curr=curr.right;
        }
        else if(curr.val>p.val){
            //  move left
            curr=curr.left;
        }
    }
    return root;
};



var lowestCommonAncestor = function(root, p, q) {
    while (root) {
        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }
        else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        } else {
            break;
        }
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