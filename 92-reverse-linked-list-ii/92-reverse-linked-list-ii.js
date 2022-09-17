// take copy  of head
// take start which is prev and curr pointer
// move pointes till you find m

//after that run from m to n reverse list
// take prev and tail pointers 
// point start.next to prev
// // if m == 1, we have no need to connect start list with reversed list reversed list itself is the start (or the head)


var reverseBetween = function(head, m, n) {
    let headCopy=head;
    let start =head, curr=head;
    let i=1;
    while(i<m){
        start=curr;
        curr=curr.next;
        i++;
    }
    let prev=null, tail=curr;
    
    while(i<=n){
        let temp= curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
        i++;
        
    }
    
    start.next=prev;
    tail.next=curr;
    
   return  m>1? head: prev;
    
    
    
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};