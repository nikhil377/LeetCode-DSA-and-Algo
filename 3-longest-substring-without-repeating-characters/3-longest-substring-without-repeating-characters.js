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

//  Take left and right pointers
// 



 var lengthOfLongestSubstring = function(s) {
     
    let left=0, right=0, longest=0;
     let countChar={};
     let seen = new Set();
     
     while(right<s.length){
         
         let char= s[right];
         
         if(!seen.has(char)){
             seen.add(char);
             longest= Math.max(longest,seen.size)
             right++;
         }else{
              seen.delete(s.charAt(left));
             left++;
         }
     }
     return longest
};

// function lengthOfLongestSubstring(s) {
//   let seen = new Set();
//   let longest = 0;
//   let l = 0;
//   for (let r = 0; r < s.length; r++) {
//     while (seen.has(s[r])) {
//       seen.delete(s[l]);
//       l++;
//     }
//     seen.add(s[r]);
//     longest = Math.max(longest, r - l + 1);
//   }
//   return longest;
// };