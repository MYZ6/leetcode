// 找出数组中重复的数字。
//
//
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
//
// 示例 1：
//
// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3
//  
//
// 限制：
//
// 2 <= n <= 100000
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function findRepeatNumber(nums) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const numKey = 'n' + num;
        if (numMap[numKey]) {
            return num;
        } else {
            numMap[numKey] = 1;
        }
    }
    return null;
}

function findRepeatNumber_swap(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] !== i) { // 不停地原地置换，直到下标与数字对应为止
            const num = nums[i];
            if (num === nums[num]) {
                return num;
            }
            nums[i] = nums[num];
            nums[num] = num;
        }
    }
    return null;
}


const nums = [2, 3, 1, 0, 2, 5, 3];
// const result = findRepeatNumber(nums);
const result = findRepeatNumber_swap(nums);
console.log(result);

