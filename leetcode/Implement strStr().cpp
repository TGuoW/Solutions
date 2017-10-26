/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/

class Solution {
public:
    int strStr(string haystack, string needle) {
        int first = -1;
        if(needle.length()==0)  
            return 0;  
        if(haystack=="" || needle =="" || needle.length()>haystack.length())  
            return -1;  
        for(int i=0;i<=haystack.length()-needle.length();i++){
            int s=1;
            for(int j=0;j<needle.length();j++){
                if(haystack[i+j]!=needle[j]){
                    s = 0;
                    break;
                }
            }
            if(s)return i;
        }
        return -1;
    }
};