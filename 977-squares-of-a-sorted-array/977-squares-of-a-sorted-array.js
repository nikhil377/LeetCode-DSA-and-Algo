
var sortedSquares = function(nums) {
    for(let i=0;i<nums.length;i++){
        nums[i]= Math.abs(nums[i])
    }
    
    nums.sort((a,b)=> a-b)
    
    for(let i=0;i<nums.length;i++){
         nums[i]=  nums[i]* nums[i]
    }

  return nums
};