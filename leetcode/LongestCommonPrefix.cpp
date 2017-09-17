/*
Write a function to find the longest common prefix string amongst an array of strings.
*/
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
	if (strs.size() > 0) {
		string p = strs[0];
		for (int i = 0; i < strs.size(); i++) {
			for (int j = 0; j < p.length(); j++) {
				if (strs[i][j] != p[j]|| strs[i][j] == NULL){
					p = p.substr(0, j);
					break;
				}
			}
		}
		return p;
	}
	else
		return "";
}
};