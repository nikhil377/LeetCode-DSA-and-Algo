/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    var binaryNum = '';
    var node = head;
    
    while(node) {
       binaryNum += node.val;
       node = node.next;
    }
    
    return parseInt(binaryNum, 2);
};