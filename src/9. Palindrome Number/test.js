/**
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

 Example 1:

 Input: 121
 Output: true
 Example 2:

 Input: -121
 Output: false
 Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 Example 3:

 Input: 10
 Output: false
 Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 Follow up:

 Coud you solve it without converting the integer to a string?
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x != 0 && x % 10 == 0)) {
        return false;
    }
    let r = 0;
    while (x > r) {
        r = r * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (x === r || x === Math.floor(r / 10)) {
        return true;
    }
    return false;
};
const {analyse} = require('../util/time-helper');
let x = 121;
// x = 1221;
// x = -121;
// x = 01;
x = 10;
const result = analyse(isPalindrome, x);
console.log('result1', result);