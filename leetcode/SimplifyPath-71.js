var simplifyPath = function(path) {
    let arr = path.split('/')
    let stack = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] === '' || arr[i] === '.') continue
        if(arr[i] === '..'){
            if(stack.length !== 0){
               stack.pop()
            }
        }else{
            stack.push(arr[i])
        }
    }
    let str = '/' + stack.join('/')
    return str
};