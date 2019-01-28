/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var res = [1]
    var arr = []
    var sum = 0
    var curr
    for (var i = 2; i <= n; i++) {
        arr = []

        for (var j = 0; j < res.length; j++) {
            if (!sum) {
                curr = res[j]
                sum++
                continue
            }
            if (curr == res[j]){
                sum++
            } else {
                arr.push(sum, curr)
                sum = 1
                curr = res[j]
            }
        }
        arr.push(sum, curr)
        res = arr
    }
    return res.join('')
};
