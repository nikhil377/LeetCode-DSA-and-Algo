/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let index=0;
    let allSum=0;
    for(let i=0;i<nums.length;i++){
        allSum+=nums[i];
    }
    // if(allSum==0){
    //     return 0;
    // }else{
         for(let i=0;i<nums.length;i++){
            let leftSum=0;
            let rightSum=0;
             
             for(let j=0;j<i;j++){
                 leftSum+=nums[j]
             }
             for(let k=i+1;k<nums.length;k++){
                 rightSum+=nums[k];
             }
             if(leftSum==rightSum){
                 return i;
             }
        // }
    }
    return -1;
};