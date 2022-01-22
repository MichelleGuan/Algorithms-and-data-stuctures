var lengthOfLongestSubstring = function(s) {
    let stack = []
    let len = 0
    for(let i =0;i< s.length; i++){
        let index= stack.indexOf(s[i])
        if(index !== -1){
            len = Math.max(stack.length,len)
            stack.splice(0,index+1)
        }
        stack.push(s[i])
    }
    len = Math.max(stack.length,len)
    return len
};
var lengthOfLongestSubstring = function(s) {
    let hash = new Set()
    let len = 0
    let right = 0
    for(let i =0;i<s.length;i++){
        if(i !== 0){
            hash.delete(s[i-1])
        }
        while(right < s.length && !hash.has(s[right])){
            hash.add(s[right])
            right ++
        }
        len = Math.max(hash.size, len)
        if(right === s.length-1) break
    }
    return len
};
var lengthOfLongestSubstring = function(s) {
    let hash = new Map()
    let max_len = 0
    let left_index = 0
    for(let i =0;i<s.length;i++){
        if(!hash.has(s[i])) hash.set(s[i],0)
        while(hash.get(s[i]) !== 0){
            hash.set(s[left_index], hash.get(s[left_index])-1)
            left_index += 1
        }
        hash.set(s[i],1)
        max_len = Math.max(i-left_index+1,max_len)
    }
    return max_len
};
