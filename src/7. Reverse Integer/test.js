/**
 * Given a 32-bit signed integer, reverse digits of an integer.

 Example 1:

 Input: 123
 Output: 321
 Example 2:

 Input: -123
 Output: -321
 Example 3:

 Input: 120
 Output: 21
 Note:
 Assume we are dealing with an environment which could only store integers
 within the 32-bit signed integer range: [−231,  231 − 1].
 For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const s = (x + '').split('').reverse().join('');
    let x2 = parseInt(s);
    x2 = x < 0 ? -x2 : x2;

    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    // console.log(min, max);
    if (x2 < min || x2 > max) {
        return 0
    }
    return x2;
};
// 2147483647
// 9646324351
const {analyse} = require('../util/time-helper');
let x = 321;
// x = -123;
x = 1534236469;
const result = analyse(reverse, x);
console.log('result1', result);