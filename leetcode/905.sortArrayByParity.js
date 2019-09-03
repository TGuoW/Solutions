/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var res = []
    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            res.unshift(A[i])
        } else {
            res.push(A[i])
        }
    }
    return res
};