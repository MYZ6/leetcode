/**
 * 剑指 Offer 04. 二维数组中的查找
 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。



 示例:

 现有矩阵 matrix 如下：

 [
 [1,   4,  7, 11, 15],
 [2,   5,  8, 12, 19],
 [3,   6,  9, 16, 22],
 [10, 13, 14, 17, 24],
 [18, 21, 23, 26, 30]
 ]
 给定 target = 5，返回 true。

 给定 target = 20，返回 false。



 限制：

 0 <= n <= 1000

 0 <= m <= 1000



 注意：本题与主站 240 题相同：https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 * @param nums
 * @returns {null|*}
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0) {
        return false;
    }
    let rowIndex = 0, colIndex = matrix[0].length - 1; // 从右上角开始遍历
    while (rowIndex < matrix.length && colIndex >= 0) {
        const upRightAngleVal = matrix[rowIndex][colIndex];
        if (upRightAngleVal > target) { // 删除当前列
            colIndex--;
        } else if (upRightAngleVal < target) { // 删除当前行
            rowIndex++;
        } else {
            // console.log(rowIndex, colIndex);
            return true;
        }
    }

    return false;
};

// const matrix = [];
const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
const target = 21;
const result = findNumberIn2DArray(matrix, target);
console.log(result);

