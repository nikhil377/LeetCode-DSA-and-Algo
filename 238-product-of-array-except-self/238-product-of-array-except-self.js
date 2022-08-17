var productExceptSelf = function(nums) {
    let results = Array(nums.length).fill(0);

    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        results[i] = prefix;
        prefix *= nums[i];
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        results[j] *= postfix;
        postfix *= nums[j];
    }

    return results;
};

/*
We have to return an array so we will create a result array.
res[i]  = the product of elements on the left of i and elements on the right of i
        = left[i-1] * right[i+1], 
        where left[i] is the product of elements from 0 to i and right[i] is the product of elements from end of array to i
We will fill these two arrays, left[] and right[], and then iterate through result array and fill it with correct products. 
*/
// var productExceptSelf = function(nums) {
//     if (nums === null || nums.length <= 1) {
//         return [];
//     }
//     let n = nums.length;
//     let left = new Array(n), right = new Array(n), res = new Array(n);
//     for (let i = 0; i < n; i++) {
//         left[i] = i > 0 ? nums[i] * left[i-1] : nums[i];
//     }
//     for (let i = n-1; i >= 0; i--) {
//         right[i] = i < n-1 ? nums[i] * right[i+1] : nums[i];
//     }
//     for (let i = 1; i < n-1; i++) {
//         res[i] = left[i-1] * right[i+1];
//     }
//     res[0] = right[1];
//     res[n-1] = left[n-2];
//     return res;
//     // T.C: O(N)
//     // S.C: O(N), even though we assume that the output array is not counted as extra space,
//     // we use two extra arrays of length n
// };