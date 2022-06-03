/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
//     Algo
//     take out vowel's array reverse them
//     iterate again and replace vowel with vowel's captured array
    let vowels= ['a','e','i','o','u', 'A', 'E','I', 'O','U']
    let vowelsInArray=[];
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            vowelsInArray.push(s[i]);
        }
    }
   return s.split("").map(req => vowels.includes(req) ? (req = vowelsInArray.pop()) : req).join("");
};