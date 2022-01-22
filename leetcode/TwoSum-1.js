
 var twoSum = function(nums, target) {
    let hash = new Map()
    for(let i = 0; i<nums.length;i++){
        if(hash.has(target - nums[i])){
            return [hash.get(target - nums[i]),i]
        }else{
            hash.set(nums[i],i)
        }
    }
};