var search = function(nums, target) {
	var indexObj = {}
	for (let i = 0; i < nums.length; i++) {
		indexObj[nums[i]] = i
	}
	for (let i = 0; i < nums.length - 1; i++) {
		var minIndex = i
    	for (let j = i + 1; j < nums.length; j++) {
      		if (nums[j] < nums[minIndex]) {
				minIndex = j
			}
    	}
		var tmp = nums[minIndex]
		nums[minIndex] = nums[i]
		nums[i] = tmp
  	}

    var l = 0
    var r = nums.length - 1
    var mid
    while (l <= r) {
        mid = Math.floor((l + r) / 2)
        if (nums[mid] < target) {
            l = mid + 1
        } else if (nums[mid] > target) {
            r = mid - 1
        } else if (nums[mid] === target) {
            return indexObj[target]
        }
    }
    return -1
};