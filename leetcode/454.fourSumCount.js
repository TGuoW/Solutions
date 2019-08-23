/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    var ab = {}
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            let sum = A[i] + B[j]
            ab[sum] = (ab[sum] || 0) + 1
        }
    }
    var res = 0
    for (let i = 0; i < C.length; i++) {
        for (let j = 0; j < D.length; j++) {
            let sum = C[i] + D[j]
            if (ab[-sum]) {
                res += ab[-sum]
            }
        }
    }

    return res
};