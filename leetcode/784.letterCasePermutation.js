/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    var res = [S]
    for (var i = 0; i < S.length; i++) {
        var code = S.charCodeAt(i)
        if (code >= 65 && code <=122) {
            var t = (code - 65) >= 26 ? code - 32 : code + 32
            var len = res.length
            for (var j = 0; j < len; j++) {
                res.push(res[j].substring(0, i) + String.fromCharCode(t) + res[j].substring(i + 1))
            }
        }
    }
    return res
};