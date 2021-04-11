/**
 * 剑指 Offer 05. 替换空格
 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。



 示例 1：

 输入：s = "We are happy."
 输出："We%20are%20happy."


 限制：

 0 <= s 的长度 <= 10000
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace_lib = function (s) {
    return s.replace(/\s/g, '%20');
}
var replaceSpace = function (s) {
    const charArr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            charArr.push('%20');
        } else {
            charArr.push(s[i]);
        }
    }
    return charArr.join('');
};

const s = "We are happy.";
const result = replaceSpace(s);
console.log(result);

