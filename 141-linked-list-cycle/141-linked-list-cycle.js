/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let headCopy= head;
    let slowPointer= head, fastPointer= head;
    
    while(fastPointer && fastPointer.next){
        
        
        slowPointer=slowPointer.next;
        fastPointer=fastPointer.next.next;
        if(slowPointer==fastPointer){
            return true;
        }
    }
    
    return false;
    
};
