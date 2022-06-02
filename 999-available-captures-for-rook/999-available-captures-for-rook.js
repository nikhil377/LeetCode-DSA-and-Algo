/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
//     Algo
//     1st find the array with R
//     take one level above and below array
//     in above and below match the index if it's equal to R's index increase counter
//     loop over if found arr[i]= p val-->true && arr[i]!="." && arr[i]== "B" val--> false; 
//     at the end return counter
    
    let indexOfArray=0, indexOfValue=0;
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]=="R"){
                indexOfArray=i;
                indexOfValue= j;
                
            }
        }
    }
    
//     top and down check to decieve
    
//     top
    let counter=0;
    
for(let i=indexOfArray-1;i>=0;i--){
    
     if(board[i][indexOfValue]=="B"){
          
           break;
       }
    
       if(board[i][indexOfValue]=="p"){
           counter++;
           break;
       }
    
}
   
    
//     down
     
     for(let i=indexOfArray+1;i<board.length;i++){
         
     if(board[i][indexOfValue]=="B"){
          
           break;
       }
    
       if(board[i][indexOfValue]=="p"){
           counter++;
           break;
       }
    
    }
   
    
//     sides
    
    for(let i=indexOfValue-1;i>=0;i--){
        if(board[indexOfArray][i] =="B"){
            break;
        }
         if(board[indexOfArray][i] =="p"){
            counter++;
            break;
        }
        
    }
    
    
    for(let i=indexOfValue+1;i<board.length;i++){
        if(board[indexOfArray][i] =="B"){
            break;
        }
         if(board[indexOfArray][i] =="p"){
            counter++;
            break;
        }
        
    }
    
return counter;
    
};






