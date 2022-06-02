/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
//      Algo
    
//     iterate over matrix keep from 0 to length-1
//     [i][j] == [i+1][j+1] matches then good to go else return false;
    
    
    
    
    for(let i=0;i<matrix.length-1;i++){
        for(let j=0;j<matrix[i].length-1;j++){
            if(matrix[i][j]!=matrix[i+1][j+1]){
                return false;
            }
        }
    }
    return true;
    
    
    
    
    
};