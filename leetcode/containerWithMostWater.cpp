/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/
class Solution {
public:
    int maxArea(vector<int>& height) {
        int h = 0;
	int maxA = 0;
	int i = 0, j = height.size()-1;
	while (i < j)
	{
		h = min(height[i], height[j]);
		maxA = max(maxA, h*(j - i));
		while (height[i] <= h&&i < j)i++;
		while (height[j] <= h&&j > i)j--;
	}
	return maxA;
    }
};