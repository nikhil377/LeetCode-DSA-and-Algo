// SC: O(1) TC=O(n2)
// var twoSum = function(nums, target) {
//     let targetAfterOneMinus=0;
    
//     for(let i=0;i<nums.length;i++){
//         targetAfterOneMinus= target-nums[i];
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[j]==targetAfterOneMinus){
//                 return [j, i]
//             }
//         }
        
        
//     }
//     return [];
// };

var twoSum = function(nums, target) {
   let numsMap = new Map();
    
    for(let i=0;i<nums.length;i++){
        if(numsMap.has(target-nums[i])){
            return [numsMap.get(target-nums[i]), i]
        }else{
            numsMap.set(nums[i],i);
        }
    }
    
    return [];
};
