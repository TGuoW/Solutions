/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function(nums) {
    var res = []
    nums = nums.sort((a, b) => a - b)
    var used = Array.from({length: nums.length}).fill(false)
    var pre = []
    function dfs (depth) {
        if (depth === nums.length) {
            res.push([...pre])
            return
        }
        for (var i = 0; i < nums.length; i++) {
            if(used[i]) continue
            if(i>0&&nums[i-1]==nums[i]&&used[i-1]==false) continue
            used[i] = true
            pre.push(nums[i])
            dfs(depth + 1)
            pre.pop()
            used[i] = false
        }
    }
    dfs(0)
    return res
};