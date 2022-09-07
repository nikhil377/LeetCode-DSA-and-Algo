/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// const bstFromPreorder = function (preorder) {
//   let i = 0
//   const process = (bound) => {
//     if (i === preorder.length || preorder[i] > bound) {
//       return null
//     }

//     const num = preorder[i]
//     const node = new TreeNode(num)
//     i++

//     node.left = process(node.val)
//     node.right = process(bound)

//     return node
//   }

//   const root = process(Number.MAX_SAFE_INTEGER)

//   return root
// }




// 2nd solution

const bstFromPreorder = (preorder) => {
  // base cases
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);

  // result tree node
  var res = new TreeNode(preorder[0]);

  // iterate from 1 to n
  for (let i = 1; i < preorder.length; i++) {
    // insert this num
    res = insert(res, preorder[i]);
  }

  return res;
};

/**
 * recursive func to insert value into tree
 * @param {TreeNode} root
 * @param {number} val val to insert
 * @return {TreeNode} altered node
 */
const insert = (root, val) => {
  // base
  if (root === null) return new TreeNode(val);

  // compare value between val and root
  if (val < root.val) {
    // insert in left subtree
    root.left = insert(root.left, val);
  } else {
    // insert in right subtree
    root.right = insert(root.right, val);
  }

  // return root w/ val inserted
  return root;
};
