const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const num2 = nums[j];
            const sum = num1 + num2;
            console.log(num1, num2, sum);
            if (sum === target) {
                return [i, j];
            }
        }
    }
};

const nums = [3, 2, 7, 11, 15], target = 9;
const result = twoSum(nums, target);
console.log(result);


//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]