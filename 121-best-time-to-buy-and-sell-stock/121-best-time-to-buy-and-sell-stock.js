// var maxProfit = function(prices) {
//     var min = Number.MAX_SAFE_INTEGER; 
//     var max = 0;
//     for (var i = 0; i < prices.length; i++) {
//         min = Math.min(min, prices[i]);
//         max = Math.max(max, prices[i] - min);
//     }
//     return max;
// };

var maxProfit = function(prices) {
  let min= prices[0], max=0;
    
    for(let i=0;i<prices.length;i++){
        if(max< prices[i]-min){
            max= prices[i]-min
        }
        if(prices[i]<min){
            min=prices[i]
        }
    }
    return max;
    
};