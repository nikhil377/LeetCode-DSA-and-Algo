
const findTheWinner = function(n, k) {
// Build queue
    let que = [] 
    for(let i = 1; i <= n;i++){
        que.push(i)
    }

    while(que.length > 1){
		let deleteCount = k-1
			while(deleteCount > 0){
				que.push(que.shift())    //Rotate Elements  
				deleteCount--
			}
        que.shift()                    // Delete kth element
    }
    return que.shift()  
};