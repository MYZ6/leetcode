/**
 * Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

 '.' Matches any single character.
 '*' Matches zero or more of the preceding element.
 The matching should cover the entire input string (not partial).

 Note:

 s could be empty and contains only lowercase letters a-z.
 p could be empty and contains only lowercase letters a-z, and characters like . or *.
 Example 1:

 Input:
 s = "aa"
 p = "a"
 Output: false
 Explanation: "a" does not match the entire string "aa".
 Example 2:

 Input:
 s = "aa"
 p = "a*"
 Output: true
 Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
 Example 3:

 Input:
 s = "ab"
 p = ".*"
 Output: true
 Explanation: ".*" means "zero or more (*) of any character (.)".
 Example 4:

 Input:
 s = "aab"
 p = "c*a*b"
 Output: true
 Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
 Example 5:

 Input:
 s = "mississippi"
 p = "mis*is*p*."
 Output: false
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    console.log(s, p)
    // 条件是str串和pattern串到达结尾，或者str串结尾了，pattern串没有结尾，都退出。
    // 而递归的条件是：遇到*，则两个出口，(str,pattern+2),(str+1,pattern);
    // 遇到'.' (str+1,pattern+1);
    if (p === '') { // 两个都为空串时，说明匹配
        return s === '';
    }
    const firstCharMatch = s.length > 0 && (p[0] === '.' || p[0] === s[0]);
    if (p.length > 1 && p[1] === '*') {
        return isMatch(s, p.substring(2)) || (firstCharMatch && isMatch(s.substring(1), p))
    }
    return firstCharMatch && isMatch(s.substring(1), p.substring(1))
};

const { analyse } = require('../util/time-helper');
const testCases = [
    { s: "aa", p: "a" },
    { s: "aa", p: "a*" },
    { s: "aa", p: ".*" },
    { s: "aab", p: "c*a*b" },
    { s: "mississippi", p: "mis*is*p*." }];

for (let testCase of testCases) {
    console.log(testCase)
    const { s, p } = testCase;
    const result = analyse(isMatch, s, p);
    console.log('result1', result);
    // break
}
