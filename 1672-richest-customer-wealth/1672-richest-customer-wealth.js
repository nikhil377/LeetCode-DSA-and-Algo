/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
//     loop over
//     inital max -1
//     compare max with calculated value
//     replace max and return max
    
    let max= -1;
    for(let i=0;i<accounts.length;i++){
        let sum=0;
        for(let j=0;j<accounts[i].length;j++){
            sum+=accounts[i][j];
        }
        if(sum>max){
            max=sum;
        }
    }
    return max;

};