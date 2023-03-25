/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    const answer = new ListNode();
    let temp = answer;
    while(l1 || l2 || carry){
        temp.next = new ListNode();
        temp = temp.next;
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        temp.val = (a + b + carry) % 10;
        carry = a + b + carry >= 10 ? 1 : 0;

    }
    return answer.next;
};