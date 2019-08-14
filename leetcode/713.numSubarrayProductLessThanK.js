/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (!nums.length) return 0
    var l = 0
    var r = 0
    var result = 0
    var sum = nums[0]
    while (r < nums.length) {
        if (sum < k) {
            result = result + r - l + 1
            r++
            sum *= nums[r]
        } else {
            sum /= nums[l]
            l++
            if (r < l) r++
        }
    }
    return result
};