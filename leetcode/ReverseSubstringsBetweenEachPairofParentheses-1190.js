var reverseParentheses = function(s) {
    let stack = []
    let str = ''
    for(const i of s){
      if(i === '('){
       stack.push(str)
       str = ''
      }else if(i === ')'){
       str = str.split('').reverse().join('')
       str = stack.pop() + str
      }else{
       str += i
      }
    }
    return str
};

var reverseParentheses = function(s) {
    let _s = s.split('')
    let len = _s.length
    let stack = []
    let str = ''
    let pair = new Array(len).fill(0)
    for(let i = 0;i<len; i++){
        if(s[i] === '('){
            stack.push(i)
        }else if(s[i] === ')'){
            let val = stack[stack.length-1]
            pair[i] = val
            pair[val] = i
            stack.pop()
        }
    }
    let direction = 1
    let index = 0
    while(index < len){
       if(s[index] === '(' || s[index] === ')'){
           index = pair[index]
           direction = -direction
       }else{
           str += s[index]
       }
       index += direction
    }
    return str
 };