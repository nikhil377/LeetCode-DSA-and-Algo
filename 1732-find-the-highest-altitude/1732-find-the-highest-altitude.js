/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altiGain=[0];
    
    for(let i=0;i<gain.length;i++){
        altiGain.push(altiGain[i]+ gain[i]);
    }
    return altiGain.sort((a,b)=>b-a)[0];
};