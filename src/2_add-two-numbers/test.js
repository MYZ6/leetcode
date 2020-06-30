function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
var addTwoNumbers = function (l1, l2) {
    const dummyHead = new ListNode(0);
    let curr = dummyHead, p = l1, q = l2;
    let carry = 0;
    while (p || q) {
        const x = p ? p.val : 0;
        const y = q ? q.val : 0;
        const sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        console.log(x, y, sum, carry, curr);
        curr = curr.next;
        if (p) p = p.next;
        if (q) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;

};

const l1 = new ListNode(2);
const l1_2 = new ListNode(4);
const l1_3 = new ListNode(3);
l1.next = l1_2;
l1_2.next = l1_3;

const l2 = new ListNode(5);
const l2_2 = new ListNode(6);
const l2_3 = new ListNode(4);
l2.next = l2_2;
l2_2.next = l2_3;

console.log(l1, l2);

const result = addTwoNumbers(l1, l2);
console.log(result);

