
// var canJump = function(nums) {
// //      check if first itself is greater than nums length
// //     also if 0 return false
//     // else run the loop from first index and jump upto that number and see if it can reach final length continue till length reached else return false
    
//     if(nums[0]>=nums.length){
//         return true;
//     }else if(nums[0]==0 && nums.length>1){
//         return false;
//     }else if(nums[0]==0 && nums.length==1){
//         return true;
//     }
    
//     else{
//         for(let i=0;i<nums.length;){
//             if(nums[i]!=0){
//                     if(nums[i]<nums.length-1){
//                         i=i+nums[i];
//                     }else if(nums[i]>=nums.length-1){
//                         return true;
//                     }else if(i==nums.length-1){
//                         return true;
//                     }
//             }else{
//                 break;
//             }
          
        
//     }
//     }
    
//     return false;
    
// };


var canJump = function(nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while(idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);
    
    if (max >= target) {
      return true;
    }
    
    if (max <= idx && nums[idx] === 0) {
      return false;
    }
    
    idx++;
  }
  
  return false;
};