var middleNode = function(head) {
    let slowPointerhead=head, fastPointer=head;
    while(fastPointer && fastPointer.next){
        slowPointerhead=slowPointerhead.next;
        fastPointer=fastPointer.next.next;
    }
    return slowPointerhead;
    
};