/*
找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
*/
function smallestCommons(arr) {
  arr=arr.sort(function(a,b){
    return a-b;
  });
  var num=arr[0];
  for(var i=arr[0]+1;i<=arr[1];i++){
    num*=i/fun(num,i);
  }
  return num;
}
function fun(m,n){
  if(m%n===0) return n;
  return fun(n,m%n);
}