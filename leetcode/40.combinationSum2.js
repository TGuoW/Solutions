/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var s = function (arr,cur, target, res, prev) {
    for (var i = cur; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1] && cur !== i)continue
        if (arr[i] < target) {
            s(arr, i + 1, target - arr[i], res, [...prev, arr[i]])
        } else if (arr[i] === target) {
            res.push([...prev, arr[i]])
        } else {
            break
        }
    }
}
var combinationSum2 = function(candidates, target) {
    if (!candidates.length) return []
    var res = []
    candidates.sort((a, b) => a-b)
    s(candidates,0, target, res, [])
    return res
};