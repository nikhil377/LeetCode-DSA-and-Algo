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

// SC : O(1)
// TC: O(n)
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


// SC : O(n)
// TC: O(n)

var hasCycle = function(head) {
    const seen = new Set();
    
    function traverse(node) {
        if(seen.has(node)) return true;
        if(!node) return false;
        seen.add(node);
        return traverse(node.next);
    }
    return traverse(head);
};