/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


    var reorderList = function(head) {
    // find middle node
    // split list into 2 first half and 2nd half
    // reverse 2nd half
    // attach first list with next linklist
    
        
   if (!head || !head.next) return; 
//    step-1 Finding middle
    
    let fastPointer= head.next;
    let slowPointer =head;
    
    let firstHalfList= new ListNode()
  
    while(fastPointer && fastPointer.next){
        slowPointer=slowPointer.next;
        fastPointer=fastPointer.next.next;
    }
//     2nd half added to second list
    let part2= slowPointer.next;
        
//    pointing 1st half's end list to null
//         for e.g- in 1st example 2 will be detached from 3
    slowPointer.next=null;
        
        
        
    // let firstHalfCopy=  head;
     let secondHalfCopy = part2 ;
     
        
        reverse(secondHalfCopy);
    

        function reverse(secondHalfCopy){
            let curr=secondHalfCopy, prev=null; let next= secondHalfCopy.next;
            while(curr){
            next=curr.next;
            curr.next=prev;
            
            prev=curr;
            curr= next;
            }  
            part2=prev;
            
        }
        
//         merge
        
        while(head && part2){
            let temp1= head.next;
            let temp2= part2.next;
            head.next= part2;
            part2.next= temp1;
            head=temp1;
            part2=temp2;
            
        }

        return head;
    
};
