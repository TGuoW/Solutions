/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var res = [0]
    var s = 1
    for (var i = 0; i < n; i++) {
        var len = res.length
        for (var j = len - 1; j >= 0; j--) {
            res.push(s + res[j])
        }
        s *= 2
    }
    return res
};