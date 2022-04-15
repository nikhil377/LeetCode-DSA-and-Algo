/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let digitSum="";
    
    for(let i=0;i<digits.length;i++){
        digitSum+=digits[i];
    }
    digitSum= BigInt(digitSum)+BigInt(1);
    let digitSumString= digitSum.toString();
    return digitSumString.split("")
};