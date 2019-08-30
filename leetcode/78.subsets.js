/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function s (nums, cur, res, prev) {
    for (var i = cur; i < nums.length; i++) {
        res.push([...prev, nums[i]])
        s(nums, i + 1, res, [...prev, nums[i]])
    }
}
var subsets = function(nums) {
    var res = [[]]
    s(nums, 0, res, [])
    return res
};