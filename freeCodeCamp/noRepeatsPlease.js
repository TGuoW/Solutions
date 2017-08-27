/*
把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准
*/

function sortStr(str) {
  var res = [];
  var n = 0;
  function perm(str,start,end){
    if(start == end)res.push(str.join(""));
    for(var i = start;i<str.length;i++){
      swap(str,i,start);
      perm(str,start+1,end);
      swap(str,i,start);
    }
  }
  perm(str,0,str.length-1);
  return res;
}

function swap(str,i,j){
  var temp = str[i];
  str[i] = str[j];
  str[j] = temp;
}
function permAlone(str) {
    var regex = /(.)\1+/g;
    str = str.split('');
    var filter =sortStr(str).filter(function(a) {
        return ! a.match(regex);
    });
    return filter.length;
}