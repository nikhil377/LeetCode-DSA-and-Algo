/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// saw solution 
const isIsomorphic = function(s, t) {
    const hash1 = {}
    const hash2 = {}
    for(let idx = 0; idx < s.length; idx++){
		if(hash1[s[idx]] !== hash2[t[idx]]) return false
        hash1[s[idx]] = idx
        hash2[t[idx]] = idx          
    }
    return true
};

// worked for 39 test cases excellent- tried after a month
// var isIsomorphic = function(s, t) {
//     let string1="", string2="";
    
//     for(let i=0;i<s.length;i++){
//         for(let j=0;j<s.length;j++){
//             if(s[i]==s[j]){
//                 string1+=1;
//             }else{
//                 string1+=2;
//             }          
//         }
//     }
    
//      for(let i=0;i<t.length;i++){
//         for(let j=0;j<t.length;j++){
//             if(t[i]==t[j]){
//                 string2+=1;
//             }else{
//                 string2+=2;
//             }          
//         }
//     }
//     return string1==string2;
// };