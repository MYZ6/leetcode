// Given a string, find the length of the longest substring without repeating characters.
//
//     Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
var lengthOfLongestSubstring = function (s) {
    let map = new Map(), max = 0;
    for(let i = 0, j = 0; j < s.length; j++) {
        if(map.has(s[j])) {
            // console.log('map', map.get(s[j]))
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1);
        map.set(s[j], j)
        // console.log(map)
    }
    return max
};
var lengthOfLongestSubstring2 = function (s) {
    let map = {}, max = 0;
    for(let i = 0, j = 0; j < s.length; j++) {
        const char = s[j];
        const existIndex  = map[char];
        if(existIndex !== undefined) {
            i = Math.max(existIndex + 1, i); // abba
            // i = existIndex + 1;
        }
        max = Math.max(max, j - i + 1);
        console.log(i,j,char, existIndex,max)
        map[char] = j;
    }
    return max
};

const str = 'abba';
console.log(str[0])
const result = lengthOfLongestSubstring(str);
const result2 = lengthOfLongestSubstring2(str); // abba/bbbbb/pwwkew/abcabcbb
console.log(result,result2);

