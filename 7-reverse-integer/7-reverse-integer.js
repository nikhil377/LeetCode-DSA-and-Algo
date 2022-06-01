/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
const absReversed = Math.abs(x).toString().split('').reverse().join('');
  if (absReversed > 2**31) return 0;
  return absReversed * Math.sign(x); 
//     Math.sign is used for finding the sign of number if +ve num then 1 if negitive then -1 if 0 then 0
//      Time- O(n);
//      Space- O(1)
};