/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<matrix[0].length;j++){
            let temp= matrix[i][j];
            matrix[i][j]=matrix[j][i];
            matrix[j][i]=temp;
        }
    }
    for(let i=0;i<matrix.length;i++){
        let arr=[];
        for(let j=0;j<matrix[0].length;j++){
           arr.push(matrix[i][j]);
        }
        matrix[i]=arr.reverse();
    }
};