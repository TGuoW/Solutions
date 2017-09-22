/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/
class Solution {
public:
    bool isValid(string s) {
        if(s.size() % 2 != 0) return false;
        stack<char> st;
        for(char c : s){
            switch(c){
                case '(': st.push(c);break;
                case '[': st.push(c);break;
                case '{': st.push(c);break;
                case ')':
                    if(st.empty() || st.top() != '(') return false;
                    else st.pop();
                    break;
                case ']':
                    if(st.empty() || st.top() != '[') return false;
                    else st.pop();
                    break;
                case '}':
                    if(st.empty() || st.top() != '{') return false;
                    else st.pop();
                    break;
            }
        }
        return st.empty();
    }
};
