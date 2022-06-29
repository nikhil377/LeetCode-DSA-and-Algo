var deleteDuplicates = function(head) {
    // take data in temp
    // traverse
    // if values are equal then move to next to next pointer
    // else just next move
    if(!head) return null;
    let temp=head;
       let prev=temp;
        let next=temp.next;
        
    while(next){
        
            if(prev.val == next.val){  
                prev.next=next.next;
                
            }else{
              prev=prev.next;
          }
        next=next.next;  
 
   
    }
     return head;
};

// 2nd solution

// var deleteDuplicates = function(head) {
//   if (!head) return null;
//   // Init prev as 1st node, next as 2nd node
//   let prev = head, next = head.next;

//   // Iterate until next is null, which is end of list
//   while (next) {
//     if (prev.val === next.val) {
// 	  // If next is a duplicate, skip over it by pointing its prev to its next
//       prev.next = next.next;
//     } else {
// 	  // Else, just move prev forward to continue through the list
//       prev = prev.next;
//     }
// 	// Always move next forward, it moves along with prev
//     next = next.next;
//   }

//   return head;
// }

