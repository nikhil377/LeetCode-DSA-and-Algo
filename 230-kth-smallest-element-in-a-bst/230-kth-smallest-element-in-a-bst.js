/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(!root) return [];
    let node=root;
    let data=[];
    let n=0;
    function traverse(node){
         if(!node) return;
          if(node.left) traverse(node.left);
           if(n++<k) data.push(node.val);
          if(node.right) traverse(node.right);
         
    }
    traverse(root);
    
    
    return data[data.length-1]
};


// const kthSmallest = (root, k) => {
//   let n = 0;
//   let res;
//   const inorder = (root) => {
//     if (!root) return;
//     inorder(root.left);
//     if (n++ < k) res = root.val;
//     inorder(root.right);
//   };
//   inorder(root);
//   return res;
// };