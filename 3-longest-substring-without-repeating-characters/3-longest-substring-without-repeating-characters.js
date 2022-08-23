/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let max = -Infinity;
    let map = new Map();
    
    while(right < s.length){
        
        if(map.get(s[right]))
            map.set(s[right], map.get(s[right])+1)
        else
            map.set(s[right], 1)
        
        
        while(map.get(s[right]) > 1){
            if(map.get(s[left])===1){
                map.delete(s[left]);
            }else{
                map.set(s[left], map.get(s[left])-1);
            }
            
            left++;
        }
        max = Math.max(max, right-left+1);
        right++;
    }
    return max === -Infinity ? 0 : max; 
};