/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let length = nums.length;
    var min
    var res
    nums.sort((a, b) => a - b)
    for (var i = 0; i < length - 2;) {
        var l = i + 1;
        var r = length - 1
        while (l < r) {
            var all = nums[l] + nums[i] + nums[r]
            var sum = all - target
            if (Math.abs(sum) < min || min === undefined) {
                min = Math.abs(sum)
                res = all
            }
            if (sum === 0) {
                return target
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
};