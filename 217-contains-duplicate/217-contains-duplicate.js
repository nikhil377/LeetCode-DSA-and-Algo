/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let uniqueArray=[];
    for(let i=0;i<nums.length;i++){
        if(uniqueArray.indexOf(nums[i])==-1){
            uniqueArray.push(nums[i])
        }else{
            return true;
        }
    }
    return false;
};