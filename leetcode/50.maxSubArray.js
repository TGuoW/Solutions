/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var ans = nums[0]
    var tmp = ans
    for (var i = 1; i < nums.length; i++) {
        if (tmp > 0) {
            tmp += nums[i]
        } else {
            tmp = nums[i]
        }
        ans = Math.max(tmp, ans)
    }
    return ans
};
