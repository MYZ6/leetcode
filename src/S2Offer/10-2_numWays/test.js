/**
 * 剑指 Offer 10- II. 青蛙跳台阶问题
 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 示例 1：

 输入：n = 2
 输出：2
 示例 2：

 输入：n = 7
 输出：21
 示例 3：

 输入：n = 0
 输出：1
 提示：

 0 <= n <= 100
 注意：本题与主站 70 题相同：https://leetcode-cn.com/problems/climbing-stairs/
 */
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    const farr = [1n, 1n]; // bigInt
    for (let i = 2; i <= n; i++) {
        farr[i] = farr[i - 1] + farr[i - 2];
    }
    console.log(farr)
    return farr[n] % 1000000007n;
};
var numWays2 = function (n) {
    if (n === 0) {
        return 1; // 题目示例，说明 f(0) = 1
    }
    if (n === 1) {
        return 1;
    }
    let a = 1, b = 1, sum;
    for (let i = 2; i <= n; i++) {
        // sum = a + b;
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
        // console.log(sum)
    }
    // 模运算的加法，对和进行两次取模
    // (a + b) % p = (a % p + b % p) % p
    return sum;
};

console.log(Number.MAX_SAFE_INTEGER);

const n = 0;
let result = numWays(n)
console.log(result);
// result = fib(n);
// console.log(result);
result = numWays2(n);
console.log(result);
