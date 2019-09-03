
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function quickSort (arr, left, right, k) {
	var l = left, r = right
    var mid = arr[l]
    while (l <  r) {
        while (l < r && arr[r] >= mid) r--
        arr[l] = arr[r]
        while (l < r && arr[l] <= mid) l++
        arr[r] = arr[l]
    }
    arr[r] = mid
    if (arr.length - r === k) {
        return mid
    } else if (arr.length - r > k) {
        return quickSort(arr, r + 1, right, k)
    } else {
        return quickSort(arr, left, r - 1, k)
    }
}
var findKthLargest = function(nums, k) {
    return quickSort(nums, 0, nums.length - 1, k)
};