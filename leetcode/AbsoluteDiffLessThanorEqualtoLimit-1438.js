var longestSubarray = function(nums, limit) {
    let minQue = []
    let maxQue = []
    let result = 0
    let left = 0, right = 0
    let minStart =0, maxStart = 0
    while(right < nums.length){
        while(minQue.length && minQue[minQue.length-1] > nums[right]){
            minQue.pop()
            //aviod minStart over length
            if (minQue.length - 1 < minStart) {
                minQue = []
                minStart = 0
                break
            }
        }
        while(maxQue.length && maxQue[maxQue.length-1] < nums[right]){
            maxQue.pop()
            if (maxQue.length - 1 < maxStart) {
                maxQue = []
                maxStart = 0
                break
            }
        }
        minQue.push(nums[right])
        maxQue.push(nums[right])
        //we can't use shift since this will cost more effort by re-order all ele
        while(minQue.length && maxQue.length && left<=right && maxQue[maxStart]-minQue[minStart]>limit){
             if(minQue[minStart] === nums[left]){
                minStart ++
             }
             if(maxQue[maxStart] === nums[left]){
                maxStart ++
             }
             left ++
        }
        result = Math.max(result, right-left+1)
        right ++
    }
    return result
};