/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(images) {
  
    for(let i=0;i<images.length;i++){
        images[i]=images[i].reverse();
    }
   for(let i=0;i<images.length;i++){
       for(let j=0;j<images[i].length;j++){
           if(images[i][j]==1){
               images[i][j]=0;
           }else{
               images[i][j]=1;
           }
       }
    }
    return images;
    
};