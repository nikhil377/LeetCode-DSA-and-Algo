//  Take 2 pointers
//  Left and Right
//  move right pointer one by one over the loop
//  keep track of no of occurances of chars in object
// if occurance exceeds max count update the max count
// if length of string of window + maxcount exceeds the k that is occurance then we shrink window from left and move left pointer
// at the end return right-left that is window size;



const characterReplacement = (s, k) => {
 
    let left=0, right=0;
    let countOfChars={}
    let maxCount=0;
    
    for(let i=0;i<s.length;i++){
        
        let char =s[i];
       
        if(countOfChars[char]){
            countOfChars[char]++;
        }else{
            countOfChars[char] =1;
        }
        
        if(countOfChars[char] >maxCount ){
            maxCount= countOfChars[char] ;
        }
        
        if(right-left+1 - maxCount > k){
            countOfChars[s[left]]--;
            left++;
        }
        
        right++;
        
    }
    
   return right-left;
  
    
};