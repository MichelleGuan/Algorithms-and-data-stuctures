/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
//DFS Depth First Search
 var isCousins = function(root, x, y) {
    let depth = 0
    let father = 0
    let result = {
        x:{depth: 0,father:0},
        y:{depth: 0,father:0}
    }
    const traverseTree = (node, x ,y) => {
        if(node.val === x){
            result.x.depth = depth
            result.x.father = father
        }
        if(node.val === y){
            result.y.depth = depth
            result.y.father = father
        }
        if(node.left !== null){
            father = node.val
            depth++
            node.left.depth = depth
            traverseTree(node.left, x, y)
        }
        if(node.right !== null){
            father = node.val
            if(!node.left) depth++
            else depth = node.left.depth
            traverseTree(node.right, x, y)
        }
        return     
    }
    traverseTree(root, x, y)
    if(result.x.depth === result.y.depth && result.x.father !== result.y.father) return true
    return false
};

var isCousins = function(root, x, y) {
    let result = {
        x:{depth: 0,father:0, found:false},
        y:{depth: 0,father:0, found:false}
    }
    const traverseTree = (node, depth ,parent) => {
        if(!node) return
        if(node.val === x){
            result.x = {depth: depth,father:parent, found:true}
        }
        if(node.val === y){
            result.y = {depth: depth,father:parent, found:true}
        }
        if(result.x.found === true && result.y.found === true) return
        traverseTree(node.left, depth+1, node.val)
        if(result.x.found === true && result.y.found === true) return
        traverseTree(node.right, depth+1, node.val)          
    }
    traverseTree(root, 0, null)
    if(result.x.depth === result.y.depth && result.x.father !== result.y.father) return true
    return false
};


//BFS Breadth First Search
 var isCousins = function(root, x, y) {
    let result = {
        x:{depth: 0,father:0},
        y:{depth: 0,father:0}
    }
    const checkNode = (node, depth, parent) =>{
        if(node.val === x){
            result.x = {depth: depth,father:parent, found:true}
        }
        if(node.val === y){
            result.y = {depth: depth,father:parent, found:true}
        }
    }
    let queue = [[root,0]]
    while(queue.length){
        let [node,depth] = queue.shift()
        if(node.left){
           queue.push([node.left,depth+1])
           checkNode(node.left,depth+1,node)
        }
        if(node.right){
           queue.push([node.right,depth+1])
           checkNode(node.right,depth+1,node)
        }
        if(result.x.found === true && result.y.found === true) break
    }
    if(result.x.depth === result.y.depth && result.x.father !== result.y.father) return true
    return false
};