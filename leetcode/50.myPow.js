/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
    var tmp = Math.abs(n)
    var res = 1
    for(var i = tmp; i != 0;){
        if(i % 2 != 0){
            res *= x;
        }
        x *= x;
        i = Math.floor(i / 2)
    }
    return n < 0 ? 1 / res : res
};