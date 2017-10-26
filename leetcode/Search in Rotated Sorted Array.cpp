/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

class Solution {
public:
    int search(vector<int>& nums, int target) {
        if(nums.empty())return -1;
        int start = 0,end = nums.size()-1;
        
        while(start<=end){
            int mid = start+(end-start)/2;
            if(nums[mid]==target)return mid;
            if(nums[start]==target)return start;
            if(nums[end]==target)return end;
            if(nums[start]<nums[mid]){
                if(target>nums[start]&&target<nums[mid]) end=mid-1;
                else start=mid+1;
            }
            else{
                if(target>nums[mid]&&target<nums[end]) start=mid+1;
                else end=mid-1;
            }
        }
        return -1;
    }
};