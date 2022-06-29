// var mergeTwoLists = function(l1, l2) {
//     let tempNode = new ListNode(0, null);
//     let currentNode = tempNode;
    
//     while(l1 && l2){
//         if(l1.val<l2.val){
//             currentNode.next=l1;
//             l1=l1.next;
//         }else{
//             currentNode.next = l2;
//             l2=l2.next;
//         }
//         currentNode= currentNode.next;
//     }
//    currentNode.next=  l1 || l2;
   
//     return tempNode.next;
// };

// 1st solution

// SC:O(n)+O(n)= O(n)
// TC: O(n)

// var mergeTwoLists = function(l1, l2) {
//     let tempNode = new ListNode(0, null);
//     let tempNodeCopy= tempNode;
   
    
//     while(l1 && l2){
        
//      if(l1.val>l2.val){
//          tempNodeCopy.next=l2;
//          l2= l2.next;
      
//      }else {
//          tempNodeCopy.next=l1;
//          l1= l1.next;
//      } 
//            tempNodeCopy=tempNodeCopy.next;
        
//     }
//     tempNodeCopy.next= l1 ||l2;
//     return tempNode.next;
// };


// SC:O(1)
// TC: O(n)

// 2nd solution
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2){
        return l1? l1: l2;
    }
    if(l1.val<l2.val){
     l1.next = mergeTwoLists(l1.next, l2);   
        return l1;
    }else{
         l2.next = mergeTwoLists(l1, l2.next);   
        return l2;
    }

    
};