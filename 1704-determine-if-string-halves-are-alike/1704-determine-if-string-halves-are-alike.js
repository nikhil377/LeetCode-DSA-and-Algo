/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let length=s.length;
    let firstHalf= length/2;
    let firstString="", secondString="";
    
    for(let i=0;i<firstHalf;i++){
        firstString+=s[i];
    }
    
    for(let i=firstHalf;i<length;i++){
        secondString+=s[i];
    }
    
function vowels(s) {
  let vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"];
  let count=0;
  for(let v of s) {
    if(vowels.includes(v))
        count++;     
  }
    return count;
}
let countOfFirstHalfString=    vowels(firstString);
let countOfSecondHalfString=    vowels(secondString); 
    
    
    return countOfFirstHalfString==countOfSecondHalfString
 

    
};