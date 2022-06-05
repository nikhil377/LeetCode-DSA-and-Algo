
// var spiralOrder = function(matrix) {
// const result = [];
// let top =0;
// let left =0;
// let bottom = matrix.length-1;
// let right = matrix[0].length-1;
// const size = matrix.length * matrix[0].length;

// while( result.length<size ){
//     for( let i = left ; i<= right && result.length<size ; i++ ){
//         result.push(matrix[top][i]);
//     }
//     top++;
    
//     for( let i = top ; i <= bottom && result.length<size ; i++ ){
//         result.push(matrix[i][right]);
//     }
//     right--;
    
//     for( let i = right ; i>= left && result.length<size ; i-- ){
//         result.push(matrix[bottom][i]);
//     }
//     bottom--;
    
//     for( let i = bottom ; i>= top && result.length<size ; i-- ){
//         result.push(matrix[i][left])
//     }
//     left++;
        
// }
// return result;
// }

var spiralOrder = function(matrix) {
    let result = []
    
    const height = matrix.length
    const width = matrix[0].length
    const iterations = width * height

    // offsets, added to current position
    // [row, column] --> right   down    left     up
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    
    // start going right unless matrix width is 1, otherwise start going down
    let currDirection = matrix[0].length > 1 ? 0 : 1
    let curr = [0, 0]
    
    // boundaries, to be decremented after going down and left
    let row = matrix.length
    let col = matrix[0].length
    
    for (let i = 0; i < iterations; i++) {
        const [r, c] = curr
        result.push(matrix[r][c])
        
        const [rowOffset, colOffset] = directions[currDirection]
        const nextRow = r + rowOffset
        const nextCol = c + colOffset
        curr = [nextRow, nextCol]
        
        // right
        if (currDirection === 0 && nextCol === col - 1) {
            currDirection = 1
        }
        // down
        else if (currDirection === 1 && nextRow === row - 1) {
            currDirection = 2
            row--
        }
        // left
        else if (currDirection === 2 && nextCol === width - col) {
            currDirection = 3
            col--
        }
        // up
        else if (currDirection === 3 && nextRow === height - row) {
            currDirection = 0
        }
    }

    return result
};