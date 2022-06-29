//  brute force


var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    let lengthOfFirstList = 0;
    let lengthOfSecondList = 0;
    
    let headACopy= headA;
    let headBCopy= headB;
    
    while(headACopy){
        headACopy= headACopy.next;
        lengthOfFirstList++;
    }
    
     while(headBCopy){
        headBCopy= headBCopy.next;
        lengthOfSecondList++;
    }
    
    if(lengthOfFirstList>lengthOfSecondList ){
        
        for(let i=0;i<lengthOfFirstList-lengthOfSecondList;i++){
            headA=headA.next;
        }
        
        while(headA!=headB && headA){
            headA=headA.next;
            headB= headB.next;
            
        }
          return headA;
        
    }else if(lengthOfFirstList<lengthOfSecondList){
        for(let i=0;i<lengthOfSecondList-lengthOfFirstList;i++){
            headB=headB.next;
        }
        
        while(headA!=headB && headB){
            headA=headA.next;
            headB= headB.next;
            
        }
          return headB;
    }else{
        while(headA!=headB && headB){
            headA=headA.next;
            headB= headB.next;
            
        }
        return headB;
    }
  
    
};


// optimized


// var getIntersectionNode = function(headA, headB) {
//     if(!headA || !headB) return null
//     let a = headA, b = headB
//     while(a !== b){
//         a = a.next
//         b = b.next
//         if(!a && !b)return a
//         if(!a) a = headB
//         if(!b) b = headA
//     }
//     return a
// };

// take you forward video
// algo optimized
// move l1 and l2 until they hit null or end 
// then swap the pointer to opposite linkedlist (at one time extra diff will be cut off and it will be equal and will move out of loop)