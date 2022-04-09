/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function(nums, k) {
//     let arr=[];
//     let frequencyElem={
        
//     }
    
//     for(let i=0;i<nums.length;i++){
//         if(frequencyElem[nums[i]]){
//             frequencyElem[nums[i]]++;
//         }else{
//             frequencyElem[nums[i]]=1;
//         }
//     }
    
//     for(let a in frequencyElem ){
//         if(frequencyElem[a]>=k){
//             arr.push(a);
//         }
//     }
//     return arr;
// };

var topKFrequent = function(nums, k) {
    let res = [], map = new Map();
    
    nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
    
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        res.push(sortedArray[i][0]);
    }
    
    return res;
};