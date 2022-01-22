var findMaxAverage = function(nums, k) {
    let total = -Infinity
    let left = 0
    if(left + k >= nums.length){
        return nums.reduce((a,b)=> a+b)/k  
    }
     newArr = nums.slice(left,left + k)
     total = newArr.reduce((a,b)=> a+b)
     let _total = total
     while(left + k < nums.length){
        _total = _total - nums[left] + nums[left+k]
        total = Math.max(total,_total)
        left++
     }    
     return total/k
 };