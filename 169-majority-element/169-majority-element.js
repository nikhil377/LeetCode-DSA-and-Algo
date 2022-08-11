var majorityElement = function(nums) {
    let frequencyObj={};
    for(let i=0;i<nums.length;i++){
        frequencyObj[nums[i]] ? ++frequencyObj[nums[i]]: frequencyObj[nums[i]] =1; 
    }
    //return frequencyObj
    return parseInt(Object.entries(frequencyObj).sort((a,b)=>b[1]-a[1])[0][0]);
};