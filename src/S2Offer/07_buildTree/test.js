/**
 * 剑指 Offer 07. 重建二叉树
 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。



 例如，给出

 前序遍历 preorder = [3,9,20,15,7]
 中序遍历 inorder = [9,3,15,20,7]
 返回如下的二叉树：

 3
 / \
 9  20
 /  \
 15   7


 限制：

 0 <= 节点个数 <= 5000



 注意：本题与主站 105 题重复：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    const rootVal = preorder[0];
    const rootIndex2 = inorder.indexOf(rootVal);
    const inorderLeft = inorder.slice(0, rootIndex2);
    const inorderRight = inorder.slice(rootIndex2 + 1);
    const preorderLeft = preorder.slice(1, 1 + inorderLeft.length)
    const preorderRight = preorder.slice(1 + inorderLeft.length)
    // console.log(preorderLeft, preorderRight)
    // console.log(inorderLeft, inorderRight)

    const root = new TreeNode(rootVal);
    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);
    return root;
};

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];

// preorder = inorder = [];

const result = buildTree(preorder, inorder);
console.log(result);

