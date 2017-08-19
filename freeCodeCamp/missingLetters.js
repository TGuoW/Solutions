/*
从传递进来的字母序列中找到缺失的字母并返回它。

如果所有字母都在序列中，返回 undefined。
*/

function fearNotLetter(str) {
  var left=0,right=str.length-1;
  if (str.charCodeAt(right)-str.charCodeAt(left)==right-left) return undefined;
  while(right-left>1){
    var mid = Math.floor((left+right)/2);
    (str.charCodeAt(right)-str.charCodeAt(mid))!=(right-mid)?left = mid+1:right = mid-1;
  }
  return String.fromCharCode(1+str.charCodeAt(left));
}