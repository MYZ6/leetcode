// Example 1:
//
// Input: A = [1,2,1,2,3], K = 2
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].
// Example 2:
//
// Input: A = [1,2,1,3,4], K = 3
// Output: 3
// Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

var subarraysWithKDistinct = function (A, K) {
    return (atMostK(A, K) - atMostK(A, K - 1));
};
// int atMostK(int[] A, int K) {
//         int i = 0, res = 0;
//         Map<Integer, Integer> count = new HashMap<>();
//         for (int j = 0; j < A.length; ++j) {
//             if (count.getOrDefault(A[j], 0) == 0) K--;
//             count.put(A[j], count.getOrDefault(A[j], 0) + 1);
//             while (K < 0) {
//                 count.put(A[i], count.get(A[i]) - 1);
//                 if (count.get(A[i]) == 0) K++;
//                 i++;
//             }
//             res += j - i + 1;
//         }
//         return res;
//     }
function atMostK(A, K) {
    let elemMap = {};
    let subArrSize = 0, iLeft = 0; // window left index

    for (let iRight = 0; iRight < A.length; iRight++) {
        const eRight = A[iRight]; // element of right

        if (!(eRight in elemMap)) {
            elemMap[eRight] = 0;
        }

        if (elemMap[eRight] === 0) {
            K -= 1;
        }
        elemMap[eRight] += 1;

        while (K < 0) {
            const eLeft = A[iLeft];
            elemMap[eLeft] -= 1;
            if (elemMap[eLeft] === 0) {
                K += 1;
            }
            iLeft += 1;
        }
        const newSize = iRight - iLeft + 1; // math coincidence
        subArrSize += newSize;
        console.log(iRight, newSize, subArrSize)
    }

    return subArrSize;
}

const A = [1, 2, 1, 2, 3], K = 2;
const result = subarraysWithKDistinct(A, K);
// const result2 = subarraysWithKDistinct(A, K);
console.log(result, result);

