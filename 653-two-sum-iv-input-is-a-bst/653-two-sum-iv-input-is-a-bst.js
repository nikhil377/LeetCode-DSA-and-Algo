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
 * @return {boolean}
 */

// Algo
// 


//  SC O(n) TC O(n2)
// var findTarget = function(root, k) {
//     let arr=[];   

//  inOrderTraversal(root);
//  function inOrderTraversal(root){
//      if(!root) return null;
//          inOrderTraversal(root.left);
//          arr.push(root.val)
//         inOrderTraversal(root.right);
//    }

//     if(arr?.length>0){
//          for(let i=0;i<arr.length;i++){
//             for(let j=i+1;j<arr.length;j++){
//                 if(arr[i]+arr[j]==k) return true;
//         }
//     }
// }

//     return false;
        
// }

// better solution
//  SC O(n) TC O(nlogn) - cause of quick or merge sort

var findTarget = function(root, k) {
    let sortedArr=[],left,right;
    inOrderTraversal(root);
    function inOrderTraversal(node){
        if(node===null){
            return null;
        }
        inOrderTraversal(node.left);
        sortedArr.push(node.val);
        inOrderTraversal(node.right);
    }
    left = 0;
    right = sortedArr.length-1;
    while(left<right){
        if(sortedArr[left]+sortedArr[right]=== k ){
            return true;
        }else if(sortedArr[left]+sortedArr[right] < k ){
            left++;
        }else{
            right--;
        }
    }
    return false;
};