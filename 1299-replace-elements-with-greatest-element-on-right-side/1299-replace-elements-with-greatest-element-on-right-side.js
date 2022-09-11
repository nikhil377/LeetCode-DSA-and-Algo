/**
 * @param {number[]} arr
 * @return {number[]}
 */
// const replaceElements = arr => {
//     const result = new Array(arr.length);
//     result[arr.length - 1] = -1;
    
//     for (let i = arr.length - 1; i > 0; i -= 1) {
//         result[i - 1] = Math.max(arr[i], result[i]);
//     }
    
//     return result;
// };


const replaceElements = arr => {
    let len=arr.length;
    
    return arr.map((data,index)=> index==len-1 ? -1 : Math.max(...arr.slice(index+1, len)));
    
    
    
    
};
