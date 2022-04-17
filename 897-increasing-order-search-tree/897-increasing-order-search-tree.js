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
 * @return {TreeNode}
 */

// Algo
//  1.) Take dummy node
//  2.) Take copy of dummy node
//  3.) do inorder traversal and add values to the right of cursor(copy of dummy node)
//  4.) update the cursor with cursor.right that is keep it null (just to update the cursor)
//  5.) return dummy.right and you are good to go :) 
//  O(n) O(n)
var increasingBST = function(root) {
    let dummyNode = new TreeNode("dummy");
    let cursor=dummyNode;
    inOrder(root)   
    
    function inOrder(root){
        if(!root){
            return;
        }
        inOrder(root.left);
        
        cursor.right = new TreeNode(root.val);
        cursor= cursor.right
        inOrder(root.right);
        
    }
    return dummyNode.right;
    
    
};