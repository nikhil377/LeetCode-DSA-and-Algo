var majorityElement = function(nums) {
    let frequencyObj={};
    for(let i=0;i<nums.length;i++){
        frequencyObj[nums[i]] ? ++frequencyObj[nums[i]]: frequencyObj[nums[i]] =1; 
    }
    //return frequencyObj
    return parseInt(Object.entries(frequencyObj).sort((a,b)=>b[1]-a[1])[0][0]);
};

var majorityElement = function(nums) {
let majorityAmount = Math.floor(nums.length / 2);
let map = {};

for(let i = 0; i < nums.length; i++) {
    if(map[nums[i]] !== undefined) {
        map[nums[i]]++;
    } else {
        map[nums[i]] = 1;
    }
    if(map[nums[i]] > majorityAmount) {
        return nums[i];
    }
}
return -1;
}