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

// 2nd solution 

var detectCycle = function(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            while(slow !== fast){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}

// https://leetcode.com/problems/linked-list-cycle-ii/discuss/1088796/JavaScript-Linked-List-Cycle-II