/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
*/
class Solution {
public:
    string convert(string s, int numRows) {
        int len = s.length();  
        if (len == 0 || numRows <= 1) return s;  
        string *ans = new string[numRows];  
        for(int i=0;i<len;i++){
            int r = i%(2*numRows-2);
            if(r<(numRows-1))
                ans[r]+=s[i];
            else
                ans[2*numRows-2-r]+=s[i];
        }
        string sh;
        for(int j=0;j<numRows;j++)
            sh+=ans[j];
        return sh;
    }
};