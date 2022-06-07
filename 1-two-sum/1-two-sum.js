/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let targetAfterOneMinus=0;
    
    for(let i=0;i<nums.length;i++){
        targetAfterOneMinus= target-nums[i];
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]==targetAfterOneMinus){
                return [j, i]
            }
        }
        
        
    }
    return [];
};