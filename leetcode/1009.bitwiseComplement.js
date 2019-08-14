/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    if (N === 0) return 1
    var i = 0
    while (2 ** i <= N) {
        i++
    }
    return 2 ** i - 1 -N
};
