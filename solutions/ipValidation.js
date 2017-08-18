/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. Input to the function is guaranteed to be a single string.

Examples of valid inputs: 1.2.3.4 123.45.67.89

Examples of invalid inputs: 1.2.3 1.2.3.4.5 123.456.78.90 123.045.067.089
*/

function isValidIP(str) {
  str = str.split(".");
  if (str.length!=4)return false;
  for(var i in str){
    if(parseInt(str[i])<0 || parseInt(str[i])>255|| str[i]!=(parseInt(str[i])).toString())return false;
  }
  return true;
}