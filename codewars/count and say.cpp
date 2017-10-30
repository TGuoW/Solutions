/*
The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:

Input: 1
Output: "1"
Example 2:

Input: 4
Output: "1211"
*/
class Solution {
public:
    string countAndSay(int n) {
        if(n==0)return NULL;
        if(n==1)return "1";
        string s="1";
        for(int i=1;i<n;i++){
            s=count(s);
        }
        return s;
    }
    string count(string ss){
        stringstream sss;
        int j=0,c=0;
        char flag=ss[0];
        while(j<ss.length()){
            if(ss[j]==flag){
                c++;
                j++;
            }
            else{
                sss<<c<<flag;
                c=0;
                flag=ss[j];
            }
            
        }
        sss<<c<<flag;
        // while( j < ss.length() )
        // {
        //     //临时循环位
        //     int pos = j;
        //     while (ss[pos] == flag)
        //     {
        //         c++;
        //         pos++;
        //     }//while
        //     sss << c << flag;
        //     flag = ss[pos];
        //     c = 0;
        //     //设置下一个循环位
        //     j = pos;
        // }//for
        return sss.str();
    }