/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int *n = new int[s.length()], *m = new int[s.length()];
	    int j=0;
	    int begin=0, end=0,maxL=0;
        n[0] = 0;
	    m[0] = 0;
	    for (int i = 0; i < s.length(); i++) {
		    for (int k = n[j]; k < i; k++) {
		    	if (s[i] == s[k]) {
				   j++;
			       n[j] = k + 1;
		     	}
	    	}
	    	m[j] = i + 1;
	    	maxL = max(m[j] - n[j], maxL);
	    }
	    return maxL;
    }
};