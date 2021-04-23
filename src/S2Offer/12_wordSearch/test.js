/**
 * 剑指 Offer 12. 矩阵中的路径
 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。



 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。





 示例 1：

 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 输出：true
 示例 2：

 输入：board = [["a","b"],["c","d"]], word = "abcd"
 输出：false


 提示：

 1 <= board.length <= 200
 1 <= board[i].length <= 200
 board 和 word 仅由大小写英文字母组成


 注意：本题与主站 79 题相同：https://leetcode-cn.com/problems/word-search/
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    // if (board.length === 0) {
    //     return false;
    // }
    // if (board[0].length === 0) {
    //     return false;
    // }
    const rowNum = board.length, colNum = board[0].length, wSize = word.length;
    let counter = 0;
    const search = (rowIdx, colIdx, wIdx, level = 0) => {
        // console.log(rowIdx, colIdx, wIdx, level)
        // console.log(board)
        counter++;
        if (counter > 20) {
            // return false;
        }
        if (rowIdx < 0 || colIdx < 0 || rowIdx > rowNum - 1 || colIdx > colNum - 1) {
            return false;
        }
        const char = board[rowIdx][colIdx];
        const char2 = word[wIdx];
        if (char === char2) {
            // console.log(char)
            if (wIdx === wSize - 1) {
                console.log(wIdx, wSize, char)
                return true;
            }
            wIdx++;
            level++;
            board[rowIdx][colIdx] = ''; // 进入下级递归前，标记访问状态
            const result = search(rowIdx - 1, colIdx, wIdx, level) || search(rowIdx, colIdx + 1, wIdx, level)
                || search(rowIdx + 1, colIdx, wIdx, level) || search(rowIdx, colIdx - 1, wIdx, level); // 上右下左依次寻找
            board[rowIdx][colIdx] = char; // restore value
            return result;
        }
        return false;
    }
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            if (search(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

// const board = [["A", "B", "C", "C"], ["S", "C", "C", "S"], ["A", "F", "E", "E"]], word = "BCF";
const board = [["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], word = "AAB";
// const board = [["a", "b"], ["c", "d"]], word = "abcd";
let result = exist(board, word);
console.log(result);
