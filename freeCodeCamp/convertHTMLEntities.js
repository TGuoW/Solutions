/*
将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
*/

function convert(str) {
  var p=/[&<>"']/g;
  return str.replace(p,function(char){
    switch(char){
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
    }
  });
}

convert("Shindler's List");