/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
	int sum = 0, second = 1, third = nums.size() - 1,closest=nums[0]+nums[1]+nums[third];
	sort(nums.begin(), nums.end());
	for (int first=0; first < nums.size(); first++) {
		second = first + 1;
		third = nums.size() - 1;
			while (second < third) {
		        sum = nums[first] + nums[second] + nums[third];
				if (abs(target - sum)<abs(target - closest)) {
					closest = sum;
				}
				if (closest == target)
					return target;
				if (sum < target)
					second++;
				if (sum > target)
					third--;
			}
	}
	return closest;
}
};