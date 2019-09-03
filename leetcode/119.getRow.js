/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [1]
    for (var i = 0; i < rowIndex; i++) {
        for (var j = res.length - 1; j > 0; j--) {
            res[j] = res[j] + res[j - 1]
        }
        res.push(1)
    }
    return res
};