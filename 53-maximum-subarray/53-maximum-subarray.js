/**
 * @param {number[]} nums
 * @return {number}
 */

 // take max as minimum safe integer
//  loop through and add sum of digit find max out of sum and max
// return sum but a catch is to make sum 0 again if it falls under 0 because our aim to make it maximum subarray

var maxSubArray = function(nums) {
   let max= Number.MIN_SAFE_INTEGER, sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        max= Math.max(sum, max);
        if(sum<0) sum=0;
    }
    return max;
};