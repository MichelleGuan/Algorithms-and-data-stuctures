/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {
    let parents = new Map()
    let anw = []
    const dfs = (node,parent) =>{
        if(!node) return
        dfs(node.left,node)
        dfs(node.right,node)
        parents.set(node.val,parent)
    }
    dfs(root,null)
    const find = (node, from, dep, k) =>{
        if(!node) return
        if(dep === k) anw.push(node.val)
        if(node.left !== from){
          find(node.left,node,dep+1,k)
        }
        if(node.right !== from){
          find(node.right,node,dep+1,k)
        }
        if(parents.get(node.val) !== from){
          find(parents.get(node.val),node,dep+1,k)
        }      
    }
    find(target, null, 0, k)
    return anw
};


 var distanceK = function(root, target, k) {
    let parents = new Map()
    let result = []
    let findParent = (node, parent) =>{
        if(!node) return
        findParent(node.left, node)
        findParent(node.right, node)
        parents.set(node.val, parent)
    }
    findParent(root,null)
    let fromTarget = (node, from, dep) =>{
        if(!node) return
        if(dep === k) result.push(node.val)
        node.left !== from && fromTarget(node.left, node, dep+1)
        node.right !== from && fromTarget(node.right, node, dep+1)
        parents.get(node.val) !== from && fromTarget(parents.get(node.val),node, dep+1)
    }
    fromTarget(target, null, 0)
    return result
};