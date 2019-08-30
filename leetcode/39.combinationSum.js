/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var s = function (arr,cur, target, res, prev) {
    for (var i = cur; i < arr.length; i++) {
        if (arr[i] < target) {
            s(arr, i, target - arr[i], res, [...prev, arr[i]])
        } else if (arr[i] === target) {
            res.push([...prev, arr[i]])
        } else {
            continue
        }
    }
}
var combinationSum = function(candidates, target) {
    if (!candidates.length) return []
    var res = []
    s(candidates,0, target, res, [])
    return res
};