/**
 * 剑指 Offer 06. 从尾到头打印链表
 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。



 示例 1：

 输入：head = [1,3,2]
 输出：[2,3,1]


 限制：

 0 <= 链表长度 <= 10000
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    const result = [];
    const visitNext = (node) => {
        if (node == null) {
            return
        }
        visitNext(node.next);
        result.push(node.val);
    }
    visitNext(head);
    return result;
};

let head = new ListNode(1);
const node2 = new ListNode(3);
head.next = node2;
const node3 = new ListNode(2);
node2.next = node3;

// head = null;

const result = reversePrint(head);
console.log(result);

