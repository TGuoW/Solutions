/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    var flag = 0
    for (var i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            if (flag === -1) return false
            else if (flag === 0) flag = 1
        }
        if (A[i] < A[i - 1]) {
            if (flag === 1) return false
            else if (flag === 0) flag = -1
        }
    }
    return true
};