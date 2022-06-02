/**
 * @param {number[][]} mat
 * @return {number}
 */


//     Algo
//     take counter;
//     find 1 first take it's index
//     compare it's row i.e same array in which 1 was found
//  

var numSpecial = function(mat) {
    let count = 0
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                if (isValidRow(i) && isValidCol(j)) {
                    count++
                }
            }
        }
    }
    
    function isValidRow(index) {
        let count = 0
        let row = mat[index]
        for (let i = 0; i < row.length; i++) {
            if (row[i] === 1) {
                count++
            }
        }
        if (count > 1) {
            return false
        } else {
            return true
        }
    }
    
    function isValidCol(index) {
        let count = 0
        for (let i = 0; i < mat.length; i++) {
            let row = mat[i]
            if (row[index] === 1) {
                count++
            }
        }
        if (count > 1) {
            return false
        } else {
            return true
        }
    }
    
    return count
};