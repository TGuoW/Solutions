/*
给一个正整数num，返回小于或等于num的斐波纳契奇数之和。

斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
*/

function sumFibs(num) {
  var sum=1,a=1,b=1;
  while(b<=num){
    if(b%2)sum+=b;
    b=a+b;
    a=b-a;
  }
  return sum;
}