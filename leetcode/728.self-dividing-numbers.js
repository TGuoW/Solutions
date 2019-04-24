/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var res = []
    for (var i = left; i <= right; i++) {
        if (i.toString().includes('0')) continue
        res.push(i)
        var tmp = i
        var r = 1000
        while (r >= 1) {
            var t = Math.floor(tmp / r)
            if (t === 0) {
                r /= 10
                continue
            }
            if (i % t !== 0) {
                res.pop()
                break
            }
            tmp = i % r
            r /= 10
        }
    }
    return res
};