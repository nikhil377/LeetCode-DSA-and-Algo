/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let listCopy=head;
    
    while(listCopy){
        if(listCopy.val=="X"){
            return listCopy;
        }
        
        listCopy.val="X";
        listCopy=listCopy.next;
    }
    return null
};