
 var nextGreaterElement = function(nums1, nums2) {
    const hashMap = new Map()
    const result = []
    nums2.forEach((val, index)=>{hashMap.set(val,index)})
    nums1.forEach((val)=>{
    if(hashMap.has(val)){
        for(let i = hashMap.get(val);i< nums2.length;i++){
            if(nums2[i]>val){
              result.push(nums2[i])
              return
            }
        }
        result.push(-1)
    }
    })
    return result
};


 var nextGreaterElement = function(nums1, nums2) {
    const hashMap = new Map()
    const stack = []
    const result = []
    for(let i= nums2.length-1;i>=0;i--){
      while(stack.length && stack[stack.length-1]<nums2[i]){
          stack.pop()
      }
      if(stack.length>0){
          hashMap.set(nums2[i], stack[stack.length-1])
      }else{
          hashMap.set(nums2[i], -1)
      }
      stack.push(nums2[i])
    }
    nums1.forEach((val)=>{result.push(hashMap.get(val))})
    return result
};