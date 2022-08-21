/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   
    if(strs.length==0 ) return "";
    
    let prefix="";
    let maxCommonPrefix = Math.min(...strs.map((str)=> str.length));
    
    for(let i=0;i<maxCommonPrefix;i++){
        let char= strs[0][i];
      if (strs.every(str => str[i] === char)) {
            prefix+=char;
        }else{
            break;
        }
    }
    return prefix;
    
}

