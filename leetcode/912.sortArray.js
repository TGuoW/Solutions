/**
 * @param {number[]} nums
 * @return {number[]}
 */
function quickSort (nums, l, r) {
    if (r - l < 1) return
    var left = l, right = r
    var base = nums[l]
    while (l < r) {
        while (l < r && nums[r] >= base) r--
        nums[l] = nums[r]
        while (l < r && nums[l] <= base) l++
        nums[r] = nums[l]
    }
    nums[r] = base
    quickSort(nums, left, r - 1)
    quickSort(nums, r + 1, right)
}
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1)
    return nums
};