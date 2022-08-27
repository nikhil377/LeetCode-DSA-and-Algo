/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return head
    let begin = { val: -1, next: head }
       
    let [slow, fast] = [begin, begin]
    // move fast ahead by n
    while(n--){
        fast = fast.next
    }
    
    while(fast.next){
        [slow, fast] = [slow.next, fast.next]
    }
    
    // remove slow.next
    removeNextNode(slow)
    
    return begin.next
};

const removeNextNode = (node) => { 
    node.next = node.next.next
}