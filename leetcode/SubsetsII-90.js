/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    let res = []
    let path = []
    nums.sort()
    const subSets = (start, nums) =>{
        res.push(path.slice(0))
        if(start > nums.length-1){
           return
        }
        for(let i=start; i<nums.length; i++){
            if(i > start && nums[i]===nums[i-1]){
                continue
            }
            path.push(nums[i])
            subSets(i + 1, nums)
            path.pop()
        }
    }
    subSets(0,nums)
    return res
};