/*
传入二进制字符串，翻译成英语句子并返回。
*/
function binaryAgent(str) {
  str = str.split(" ");
  var res = [];
  for(var i=0;i<str.length;i++){
    res+=String.fromCharCode(parseInt(Number(str[i]),2));
  }
  return res;
}