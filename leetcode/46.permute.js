/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
    var res = []
    var used = Array.from({length: nums.length}).fill(false)
    var pre = []
    function dfs (depth) {
        if (depth === nums.length) {
            res.push([...pre])
            return
        }
        for (var i = 0; i < nums.length; i++) {
            if (!used[i]) {
                used[i] = true
                pre.push(nums[i])
                dfs(depth + 1)
                pre.pop()
                used[i] = false
            }
        }
    }
    dfs(0)
    return res
};