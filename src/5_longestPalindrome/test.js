/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

 Example 1:

 Input: "babad"
 Output: "bab"
 Note: "aba" is also a valid answer.
 Example 2:

 Input: "cbbd"
 Output: "bb"
 */

var longestPalindrome = function (s) {
    let maxSize = 0, maxStr = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const sub = s.substring(i, j);
            if (isPalindrome(sub)) {
                if (sub.length > maxSize) {
                    maxStr = sub;
                    maxSize = sub.length;
                }
            }
            // console.log(sub, isPalindrome(sub))
        }
        // return
    }
    return maxStr
};

var longestPalindrome2 = function (s) {
    let maxSize = 0, maxStr = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const sub = s.substring(i, j);
            if (isPalindrome2(sub)) {
                if (sub.length > maxSize) {
                    maxStr = sub;
                    maxSize = sub.length;
                }
            }
            // console.log(sub, isPalindrome(sub))
        }
        // return
    }
    return maxStr
};
const isPalindrome = s => {
    let i = 0, j = s.length - 1;
    while (i < j) {
        const leftChar = s.charAt(i), rightChar = s.charAt(j);
        if (leftChar !== rightChar) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

const isPalindrome2 = s => {
    const leftChar = s.charAt(0), rightChar = s.charAt(s.length - 1);
    // console.log('if', s, leftChar, rightChar)

    if (leftChar !== rightChar) {
        return false;
    }
    if (s.length <= 3) {
        if (leftChar === rightChar) {
            return true;
        }
    }
    return isPalindrome(s.substr(1, s.length - 2))
};

var longestPalindromeDP = function (s) {
    let maxSize = 1, startIdx = 0;
    const table = [];
    // for (let i = 0; i < s.length; i++) {
    //     table[i] = [];
    //     // table[i][i]= true;
    // }
    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            if (!table[i]) {
                table[i] = [];
            }

            if (s[i] !== s[j]) {
                table[i][j] = false;
            } else {
                if (j - i < 3) {
                    table[i][j] = true;
                } else {
                    // console.log(i, table[i + 1][j - 1])
                    table[i][j] = table[i + 1][j - 1];
                }
                if (table[i][j] && j - i + 1 > maxSize) {
                    startIdx = i;
                    maxSize = j - i + 1;
                }
            }
        }
    }
    return s.substr(startIdx, maxSize);
};

var longestPalindromeCE = function (s) {
    let maxSize = 1, startIdx = 0;
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length) {
            // console.log(left, right)
            if (s[left] === s[right]) {
                left--;
                right++;
            } else {
                break;
            }
        }
        const size = (right - 1) - (left + 1) + 1;
        // console.log(left, right, size);
        if (size > maxSize) {
            maxSize = size;
            startIdx = left + 1;
        }
    };

    for (let j = 0; j < s.length - 1; j++) {
        expandAroundCenter(j, j);
        expandAroundCenter(j, j + 1);
    }
    return s.substr(startIdx, maxSize);
};

// S = "abacdfgdcaba", S′ = "abacdgfdcaba".
// To rectify this, each time we find a longest common substring candidate, we check if the substring’s indices are the same as the reversed substring’s original indices.
// If it is, then we attempt to update the longest palindrome found so far; if not, we skip this and find the next candidate.
var longestPalindromeLCS2D = function (s) {
    const reverse = s.split('').reverse().join('');
    const matrix = [];
    let biggest = null;
    let end = null;

    if (!s) {
        return s;
    }

    for (let i = 0; i < s.length; i++) {
        if (matrix[i] == null) {
            matrix[i] = [];
        }
        for (let j = 0; j < reverse.length; j++) {
            if (s[i] == reverse[j]) {
                if (i == 0 || j == 0) {
                    matrix[i][j] = 1;
                } else {
                    matrix[i][j] = matrix[i - 1][j - 1] + 1;
                }
                if (matrix[i][j] > biggest) {
                    if (i - matrix[i][j] + 1 == s.length - 1 - j) {
                        end = i;
                        biggest = matrix[i][j];
                    }
                }
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    return s.substring(end - biggest + 1, end + 1);
};

let str = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'; // cbbd, babad
// str = 'babadabad';
// str = 'babdba';
// str = 'a';
str = 'bb';
// const result = longestPalindrome(str);
// const result2 = longestPalindrome2(str);
// console.log('result', result, result);

const {analyse} = require('../util/time-helper');
// const result = analyse(longestPalindrome, str);
// console.log('result1', result);
// const result2 = analyse(longestPalindrome2, str);
// console.log('result2', result2);
// const result3 = analyse(longestPalindromeLCS2D, str);
// console.log('result3', result3);
const result4 = analyse(longestPalindromeDP, str);
console.log('result4', result4);
const result5 = analyse(longestPalindromeCE, str);
console.log('result5', result5);