/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    let length = nums.length;
    nums.sort((a, b) => a - b)
    for (var i = 0; i < length - 2;) {
        var l = i + 1;
        var r = length - 1
        while (l < r) {
            if (nums[i] > 0 || nums[r] < 0) break
            var sum = nums[l] + nums[i] + nums[r]
            if (sum === 0) {
                res.push([nums[l], nums[i], nums[r]])
                while (l < r && nums[l] === nums[++l]) {}
            } else if (sum > 0) {
                r--
            } else {
                l++
            }
        }
        while (nums[i] === nums[++i]) {}
    }
    return res
}