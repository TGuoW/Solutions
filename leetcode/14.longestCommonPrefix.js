/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0) return "";
    for (var i = 0; i < strs[0].length ; i++){
        var c = strs[0].charAt(i);
        for (var j = 1; j < strs.length; j ++) {
            if (i == strs[j].length || strs[j].charAt(i) != c)
                return strs[0].substring(0, i);
        }
    }
    return strs[0];
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var getCommon = function (a, b) {
    var min = a.length > b.length ? b : a
    for (var i = 0; i < min.length; i++) {
        if (a[i] !== b[i]) {
            return a.substring(0, i)
        }
    }
    return min
}
var lo = function (strs, l, r) {
    if (l > r) return ""
    if (l == r) return strs[l]
    var mid = Math.floor((l + r) / 2)
    return getCommon(lo(strs, l, mid), lo(strs, mid + 1, r))
}
var longestCommonPrefix = function(strs) {
    var l = 0
    var r = strs.length - 1
    return lo(strs, l, r)
};