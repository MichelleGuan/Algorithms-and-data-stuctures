/**
 * @param {string} s
 * @return {boolean}
 */
 const isValid = function(s) {
    let stack = []
     for(let i=0; i<s.length;i++){
         switch(s[i]){
             case '{':
              stack.push('}')
              break
             case '(':
              stack.push(')')
              break
             case '[':
              stack.push(']')
              break
             default:
              if(stack.length === 0){
                  return false
              }else if(s[i] !== stack.pop()){
                  return false
              }           
         }
     }
     if(stack.length === 0) return true
     return false
  };

  const isValid2 = function(s) {
      let stack = []
      let map = new Map()
      map.set('(',')')
      map.set('[',']')
      map.set('{','}')
      for(let i=0; i<s.length;i++){
          if(map.has(s[i])){
              stack.push(s[i])
          }else if(stack.length === 0 || s[i] !== map.get(stack.pop())){
              return false
          }     
      }
      if(stack.length === 0) return true
      return false 
  };

console.log(isValid2('[[]]{{}}'))