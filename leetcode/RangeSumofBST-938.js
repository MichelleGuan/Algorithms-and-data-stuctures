var rangeSumBST = function(root, low, high) {
    let sum = 0
    const dfs = (node)=>{
        if(!node) return
        if(node.val <= high && node.val>= low){
            sum += node.val
        }
        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
    }
    dfs(root)
    return sum
};

var rangeSumBST = function(root, low, high) {
    let sum = 0
    let queue = [root]
    const bfsCheck = (node)=>{
        if(node.val <= high && node.val>= low){
            sum += node.val
        }
    }
    bfsCheck(root)
    while(queue.length){
        let node = queue.shift()
        if(node.left){
           queue.push(node.left)
           bfsCheck(node.left)
        }
        if(node.right){
           queue.push(node.right)
           bfsCheck(node.right)
        }
    }
    return sum
};