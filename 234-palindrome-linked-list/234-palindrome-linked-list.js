
// Algo
//  one approach is to take a string and add the numbers to it
//  reverse the string and check if original and reversed is matching or not
//  if yes return true otherwise false


// 2nd optimized approach is-->
// traverse till mid of linkedlist
// find middle (use slow and fast pointer approach)
// reverse the 2nd half of the list
// now compare 1st half and 2nd half of list
// at any point in while loop if they aren't equal return false else return true

// var isPalindrome = function(head) {
//    let headCopy= head;
//     let arr=[];
    
    
//     while(headCopy){
//         arr.push(headCopy.val);
//         headCopy = headCopy.next;
        
//     }
//      if(arr.join('') == arr.reverse().join('')) {
//          return true;
//      }
//      else {return false}
// };

// best approach

var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    
    var slowPointer=head;
    var fastPointer=head;
    
    while(fastPointer.next && fastPointer.next.next){
       
        slowPointer= slowPointer.next;
         fastPointer= fastPointer.next.next;
    }
    
    var reversedList = reverseList(slowPointer.next);
    
    slowPointer=reversedList; 
    
    while(slowPointer!=null){
        if(head.val!=slowPointer.val) return false
        head=head.next;
        slowPointer= slowPointer.next;
    }
    
    return true;

};

var reverseList = function(head) {
        var pre = null;
        var next = null;
        while(head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
};