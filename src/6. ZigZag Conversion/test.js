/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

 P   A   H   N
 A P L S I I G
 Y   I   R
 And then read line by line: "PAHNAPLSIIGYIR"

 Write the code that will take a string and make this conversion given a number of rows:

 string convert(string s, int numRows);
 Example 1:

 Input: s = "PAYPALISHIRING", numRows = 3
 Output: "PAHNAPLSIIGYIR"
 Example 2:

 Input: s = "PAYPALISHIRING", numRows = 4
 Output: "PINALSIGYAHRPI"
 Explanation:

 P     I    N
 A   L S  I G
 Y A   H R
 P     I
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const table = [];
    for (let i = 0; i < numRows; i++) {
        table[i] = [];
    }
    const stepSize = numRows + (numRows - 2);
    const totalSize = s.length;
    const stepCount = Math.ceil(totalSize / stepSize);
    // console.log(totalSize, stepSize, stepCount);

    for (let i = 0; i < stepCount; i++) {
        const stepStr = s.substr(i * stepSize, stepSize);
        // console.log(stepStr);
        const benchCol = i * (numRows - 1);
        for (let j = 0; j < stepStr.length; j++) {
            const shiftCol = j >= numRows ? j - numRows + 1 : 0;
            const row = j >= numRows ? (numRows - 1) - (j - numRows + 1) : j;
            const col = benchCol + shiftCol;
            // console.log(row,col,)
            table[row][col] = stepStr[j];
        }
    }

    let result = '';
    for (let i = 0; i < numRows; i++) {
        const item = table[i];
        let rstr = '';
        for (let j = 0; j < item.length; j++) {
            let ele = table[i][j];
            rstr += ele ? ele : ' ';
            result += ele ? ele : '';
        }
        // console.log(rstr)
    }
    // console.log(result, table);
    return result;
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert2 = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        rows[i] = '';
    }

    let direction = 'down', currentRow = 0;
    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s[i];
        if (direction === 'down') {
            currentRow++;
        } else {
            currentRow--;
        }
        if (currentRow === numRows - 1) {
            direction = 'up'
        } else if (currentRow === 0) {
            direction = 'down'
        }
        // console.log(currentRow);
    }

    return rows.join('');
};

// https://leetcode-cn.com/problems/zigzag-conversion/solution/ji-ben-gui-lu-by-liyzh/

const {analyse} = require('../util/time-helper');
let str = 'PAYPALISHIRING', r = 4;
// str = 'A', r = 3;
const result = analyse(convert, str, r);
console.log('result1', result);
const result2 = analyse(convert2, str, r);
console.log('result2', result2);