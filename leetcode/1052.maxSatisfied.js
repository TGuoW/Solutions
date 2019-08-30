/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    var tmp = []
    var tmpRes = 0
    var res = 0
    for (var i = 0; i < customers.length; i++) {
        if (grumpy[i] === 1) {
            tmp[i] = customers[i]
        } else {
            tmp[i] = 0
            res += customers[i]
        }
    }
    var t = 0
    for (var j = 0; j < X; j++) {
        t += tmp[j]
    }
    tmpRes = t
    for (var k = 1; k < tmp.length - X + 1; k++) {
        t = t - tmp[k - 1] + tmp[k + X - 1]
        tmpRes = t > tmpRes ? t : tmpRes
    }
    return res + tmpRes
};