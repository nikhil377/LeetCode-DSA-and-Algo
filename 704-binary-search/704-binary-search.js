/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target) {
//     let left=0;
//     let right = nums.length-1;
//     let middle= Math.floor(nums.length/2);
//     while(left<=right){
//         if(nums[middle]== target){
//             return middle;
//         }else if(nums[middle] < target){
//             left=middle+1;
//              middle= Math.floor((left+right)/2);
            
//         }
//         else if(nums[middle] > target){
//            right= middle-1
//            middle= Math.floor((left+right)/2);
           
//         }
//     }
//     return -1;
    
 

// };

var search = function(arr, k) {
        let left=0;
        let right=arr.length-1;
        let mid=Math.floor(arr.length/2);
        while(left<=right){
            
            if(k<arr[mid]){
                right=mid-1;
                mid= Math.floor((left+right)/2);
            }else if(k>arr[mid]){
                left=mid+1;
                mid= Math.floor((left+right)/2);
            }else if(k==arr[mid]){
                return mid;
            }
            
    
}
     return -1;
}