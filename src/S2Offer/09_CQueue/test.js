/**
 * 剑指 Offer 09. 用两个栈实现队列
 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 (若队列中没有元素，deleteHead 操作返回 -1 )



 示例 1：

 输入：
 ["CQueue","appendTail","deleteHead","deleteHead"]
 [[],[3],[],[]]
 输出：[null,null,3,-1]
 示例 2：

 输入：
 ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
 [[],[],[5],[2],[],[]]
 输出：[null,-1,null,null,5,2]
 提示：

 1 <= values <= 10000
 最多会对 appendTail、deleteHead 进行 10000 次调用
 */

var CQueue = function () {
    this.stackA = [];
    this.stackB = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.stackB.length === 0) {
        if (this.stackA.length === 0) {
            return -1;
        } else {
            const stackA_size = this.stackA.length;
            for (let i = 0; i < stackA_size; i++) {
                const num = this.stackA.pop();
                this.stackB.push(num);
            }
            return this.stackB.pop();
        }
    } else {
        return this.stackB.pop();
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

/**
 * 示例 1：

 输入：
 ["CQueue","appendTail","deleteHead","deleteHead"]
 [[],[3],[],[]]
 输出：[null,null,3,-1]
 */
let obj = new CQueue();
obj.appendTail(3);
// console.log(obj)
let num = obj.deleteHead();
console.log(num);
num = obj.deleteHead();
console.log(num)

/**
 * 示例 2：

 输入：
 ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
 [[],[],[5],[2],[],[]]
 输出：[null,-1,null,null,5,2]
 */
obj = new CQueue();
num = obj.deleteHead();
console.log(num);
obj.appendTail(5);
obj.appendTail(2);
console.log(obj)
num = obj.deleteHead();
console.log(num);
console.log(obj)
num = obj.deleteHead();
console.log(num)