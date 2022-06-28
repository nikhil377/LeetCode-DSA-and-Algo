
var reverseList = function(head) {
   let current=head, prev=null;
    
    while(current){
        let holdNext= current.next;
        current.next=prev;
        prev=current;
        current=holdNext;
    }
    return prev;
};