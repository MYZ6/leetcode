/**
 * Implement atoi which converts a string to an integer.

 The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

 The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

 If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

 If no valid conversion could be performed, a zero value is returned.

 Note:

 Only the space character ' ' is considered as whitespace character.
 Assume we are dealing with an environment which could only store integers
 within the 32-bit signed integer range: [−231,  231 − 1].
 If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 Example 1:

 Input: "42"
 Output: 42
 Example 2:

 Input: "   -42"
 Output: -42
 Explanation: The first non-whitespace character is '-', which is the minus sign.
 Then take as many numerical digits as possible, which gets 42.
 Example 3:

 Input: "4193 with words"
 Output: 4193
 Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
 Example 4:

 Input: "words and 987"
 Output: 0
 Explanation: The first non-whitespace character is 'w', which is not a numerical
 digit or a +/- sign. Therefore no valid conversion could be performed.
 Example 5:

 Input: "-91283472332"
 Output: -2147483648
 Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
 Thefore INT_MIN (−231) is returned.
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();
    let negative = false;
    if (str.startsWith('-')) {
        negative = true;
        str = str.substr(1);
    } else if (str.startsWith('+')) {
        str = str.substr(1);
    }
    if (str.length === 0) {
        return 0;
    }
    const iarr = '0123456789';

    const firstChar = str[0];
    if (iarr.indexOf(firstChar) < 0) {
        return 0;
    }
    let validStr = (negative ? '-' : '') + firstChar;
    for (let i = 1; i < str.length; i++) {
        const char = str[i];
        if (iarr.indexOf(firstChar) >= 0) {
            validStr += char;
        } else {
            break;
        }
    }

    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    const x = parseInt(validStr);
    if (x > max) {
        return max;
    }
    if (x < min) {
        return min;
    }
    return x;
};
var myAtoi2 = function (str) {
    let index = 0;
    while (str[index] === ' ') {
        index++;
    }
    let sign = 1;
    if (str[index] === '+' || str[index] === '-') {
        if (str[index] === '-') {
            sign = -1;
        }
        index++;
    }
    let total = 0;
    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    while (index < str.length) {
        if (str[index] === ' ') {
            break;
        }
        const digit = str[index] - '0';
        if (Number.isNaN(digit)) {
            break;
        }
        const temp = total * 10 + digit;
        if (temp > max) {
            if (sign === 1) {
                return max;
            } else {
                return min;
            }
        } else {
            total = temp;
        }

        index++;
    }

    return sign * total;
};
// 2147483647
// 9646324351
const {analyse} = require('../util/time-helper');
let str = "42";
// str = "   -42";
// str = "+1";
str = "4193 with words";
// str = "words and 987";
str = "-91283472332";
// str = "-2147483645";
const result = analyse(myAtoi, str);
const result2 = analyse(myAtoi2, str);
console.log('result1', result);
console.log('result2', result2);

console.log(typeof ('9' - '0'), typeof '9', typeof 9);
console.log('9' - '0', 'a' - '0');