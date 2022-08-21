/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // frequency pattern solution
    s= s.split("").sort((a,b)=>a > b ? 1: -1).join("");
    t= t.split("").sort((a,b)=>a > b ? 1: -1).join("");
    
    if(s.length!=t.length) return false;
    
   return s==t;
    
    
    
   
};


 // if(s.length!=t.length) return false;
 //    let firstStringFreq={};
 //    for(let i=0;i<s.length;i++){
 //        firstStringFreq[s[i]]? ++firstStringFreq[s[i]]:firstStringFreq[s[i]]=1;
 //    }
 //    for(let i=0;i<t.length;i++){
 //       letter= t[i];
 //        if(!firstStringFreq[letter]){
 //            return false;
 //        }else{
 //            firstStringFreq[letter]-=1;
 //        }
 //    }
 //    return true;