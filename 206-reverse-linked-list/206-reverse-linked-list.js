/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// SC O(1)
// TC O(n)
// var reverseList = function(head) {
//    let current= head, prev=null;
    
//     while(current){
//         let holdNext= current.next;
//         current.next=prev;
//         prev=current;
//         current=holdNext;
        
        
//     }
//     return prev;

    
// };

// // SC O(1)
// // TC O(n)
// var reverseList = function(head) {
//     let [prev, current] = [null, head]
//     while(current) {
//         [current.next, prev, current] = [prev, current, current.next]
//     }
//     return prev
// }


// recursive call
var reverseList = function(head) {
    
    if(head== null || head.next==null){
        return head;
    }
    
    let newHead= reverseList(head.next);
    head.next.next=head;
    head.next=null;
    return newHead;
};