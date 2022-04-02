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
 var invertTree = function(root) {
    const dfs = (node) =>{
        if(!node) return
        dfs(node.left)
        dfs(node.right)
        let temp = node.left
        node.left = node.right
        node.right = temp
    }
    dfs(root)
    return root
};