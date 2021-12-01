
 var nextGreaterElements = function(nums) {
    const stack = []
    const result = []
    for(let i= nums.length * 2 - 1; i>=0; i--){
      while(stack.length && stack[stack.length-1] <= nums[i%nums.length]){
         stack.pop()
      }
      result[i%nums.length] = stack.length?stack[stack.length-1]: -1
      stack.push(nums[i%nums.length])
    }
    return result
};