/*
将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
*/

function spinalCase(str) {
  str = str.replace(/[A-Z\s_]/g,function(char){
    if(char===" "||char==="_") return ".";
    else return "."+char.toLowerCase();
  });
  return (str.split(".").filter(function(value){return value!=="";})).join("-").substr(str[0]=="-"?1:0);
}