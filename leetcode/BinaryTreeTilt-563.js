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
 * @return {number}
 */
 var findTilt = function(root) {
    let l=0, r=0, total= 0
    const dfs = (node) =>{
        if(!node){
            return
        }
        dfs(node.left)
        dfs(node.right)
        l = node.left ? node.left.val : 0
        r = node.right ? node.right.val : 0
        node.val = node.val + l + r
        total += Math.abs(l-r)
    }
    dfs(root)
    return total
};