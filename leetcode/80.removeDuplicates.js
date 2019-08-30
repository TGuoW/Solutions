/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var cur
    var num = 0
    var i = 0
    while (i < nums.length) {
        if (nums[i] === cur && num >= 2) {
            nums.splice(i, 1)
            i--
        } else if (nums[i] !== cur) {
            num = 0
            cur = nums[i]
        }
        num++
        i++
    }
    return nums.length
};