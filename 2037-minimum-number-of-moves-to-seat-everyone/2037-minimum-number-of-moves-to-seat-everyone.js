
  
//     if students's number matched with position it won't move
//     if there is diff then calculate with all position and add minimum to final moves variable
//     return the final moves variable
    
var minMovesToSeat = function(seats, students) {
    let sum = 0
    seats.sort((a,b)=>a-b)    
    students.sort((a,b)=>a-b)
    for(let i=0;i<seats.length;i++)
        sum+=Math.abs(seats[i]-students[i])
    return sum
};

// 2nd solution using reduce(accumulator, currentval, index)

var minMovesToSeat = function(seats, students) {
    seats.sort((a, b) => { return a - b})
    students.sort((a, b) => { return a - b})
    return seats.reduce((a, b, i) => a += Math.abs(seats[i] - students[i]), 0)
};