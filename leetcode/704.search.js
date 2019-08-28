/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var l = 0
    var r = nums.length - 1
    var mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (nums[mid] < target) {
            l = mid + 1
        } else if (nums[mid] > target) {
            r = mid - 1
        } else {
            return mid
        }
    }
    return -1
};