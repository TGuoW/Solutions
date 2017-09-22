/*
Determine whether an integer is a palindrome. Do this without extra space.
*/
class Solution {
public:
    bool isPalindrome(int x) {
        if(x < 0)
            return false;
        else{
            int tmp = 0, tar = x;
            while(x){
                tmp = tmp*10 + x%10;
                x /= 10;
            }
            return (tmp == tar) ? true : false;
        }
    }

};