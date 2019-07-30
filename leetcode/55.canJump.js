/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var len = nums.length - 1
    var lastPos = len
    for (var i = len; i >=0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i
        }
    }
    return lastPos === 0
};