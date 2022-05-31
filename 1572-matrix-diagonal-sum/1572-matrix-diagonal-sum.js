/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
//     loop over
//     take sum=0 and length of matrix
//     sum+=mat[i][j] bcus 0,0 1,1 2,2 + mat[i][length-i] bcus 0,2 1,1, 2,0
//  now we need to remove the extra common val for that if length%2==0 return sum-=sum- mat[length/2][length/2]
    
    let length=mat.length-1;
    let sum=0;

        
        for(let i=0;i<mat.length;i++){
        sum+=mat[i][i]+ mat[i][length-i];
        }
        if(length%2===0){
            sum= sum- mat[length/2][length/2];
        }
        return sum;
   
    
};