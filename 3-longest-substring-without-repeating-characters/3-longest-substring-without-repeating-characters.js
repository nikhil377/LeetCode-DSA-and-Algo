// single pointer move to right parse the string
//  if charCountArray is not having that char increase max count to ++;
// if char is there reset the object and add again max countt++
// return max count
//  317 / 987 test cases passed.

// var lengthOfLongestSubstring = function(s) {
 
//   let charCountObject={}, maxCount=0, maxCountArr=[]
    
//     for(let i=0;i<s.length;i++){
        
//         let char= s[i];
        
//         if(charCountObject[char]){
            
//             maxCountArr.push(maxCount);
            
//             charCountObject={};
//             charCountObject[char]=1;
//             maxCount=1;
            
//         }else{
//             charCountObject[char]=1;
//             maxCount++;
            
//         }
//     }
//     return Math.max(...maxCountArr, maxCount)
// };

 var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left=0,right=0;
    let longest=0;
    while(right < s.length){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right))
            longest = Math.max(set.size,longest)
            right++;
        }else{
            set.delete(s.charAt(left));
            left++;
        }
    }
    return longest;
};