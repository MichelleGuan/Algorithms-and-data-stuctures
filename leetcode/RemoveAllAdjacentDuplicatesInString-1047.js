var removeDuplicates = function(s) {
    let arr = s.split('')
    let stack = []
    for(let i=0; i<arr.length ; i++){
        if(stack.length && stack[stack.length-1] === arr[i]){
            stack.pop()
        }else(
            stack.push(arr[i])     
        )
    }
    return stack.toString().replaceAll(',','')
};