/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const res=[];
    for(let r=0;r<matrix[0].length;r++){
        const arr=[]
        for(let c=0;c<matrix.length;c++){
            arr.push(matrix[c][r])
        }
        res.push(arr)
    }
    return res
};