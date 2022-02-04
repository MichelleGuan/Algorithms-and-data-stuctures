var findAnagrams = function(s, p) {
    let arrP = new Array(26).fill(0)
    let arrS
    let left = 0
    let result = []
    if(p.length > s.length){
        return []
    }
    for(let i = 0; i< p.length;i++){
       arrP[p[i].charCodeAt()-'a'.charCodeAt()] += 1
    }
    while(left<= s.length-p.length){
       let right = left + p.length
       arrS = new Array(26).fill(0)
       for(let i = left; i< right;i++){
           arrS[s[i].charCodeAt()-'a'.charCodeAt()] += 1
       }
       //arrS.toString() === arrP.toString()
       if(arrS.every((ele,index)=> ele === arrP[index])){
           result.push(left)
       }
       left++
    }
    return result
};