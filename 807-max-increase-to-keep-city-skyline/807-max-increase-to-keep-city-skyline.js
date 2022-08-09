/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    
//     max of row
//     max of column
//     new Height = min of both row and column
//     check if num is less than new Height then sum = newH -grid[row][col] 
//     grid[row][col] is now newH
    
    
    let sum=0;
    let newHeight=0;
    
    
     var maxRowFunc=function(grid){
        let maxRoww=0;
        for(let i=0;i<grid.length;i++){
            if(maxRoww<grid[i]){
                maxRoww=grid[i];
            }
        }
        return maxRoww;
    }
    
   var maxColumnFunc=function(grid){
        let maxCol=0;
        for(let i=0;i<grid.length;i++){
            if(maxCol<grid[i]){
                maxCol=grid[i];
            }
        }
        return maxCol;
    }
    
//     var findMax= function(grid){
//       for(let i=0; i<grid.length; i++){
//         let max=0;
          
//         for(let j=0; j<grid[0].length; j++){
//             if(max<grid[i][j]){
//                 max=grid[i][j];
//             }
            
//         }
//           return max;
//     }
//     }
  const arrayColumn = (arr, n) => arr.map((x) => x[n]);




    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            let maxRow= maxRowFunc(grid[i])
            let getColumn= arrayColumn(grid,j)
            let maxColumn= maxColumnFunc(getColumn);
            // console.log("maxRow",maxRow);
            // console.log("maxCol",maxColumn);
            let newH= Math.min(maxRow,maxColumn);
            
            if(grid[i][j]<newH){
                sum+=newH-grid[i][j];
                grid[i][j]= newH;
            }

            
        }
    }
    

    
    
    return sum;
    
    
};