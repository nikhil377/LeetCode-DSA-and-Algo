/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// var transpose = function(matrix) {
//     const res=[];
//     for(let r=0;r<matrix[0].length;r++){
//         const arr=[]
//         for(let c=0;c<matrix.length;c++){
//             arr.push(matrix[c][r])
//         }
//         res.push(arr)
//     }
//     return res
// };

var transpose = function(matrix) {
    const result = [];
    
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[0].length; j += 1) {
            if (!result[j]) {
                result[j] = [];
            }
            
            result[j][i] = matrix[i][j];
        }
    }
    
    return result;
};