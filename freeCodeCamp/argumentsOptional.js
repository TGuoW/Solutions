/*
创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
*/

function add(a) {
  if(arguments.length==2&&typeof a === 'number' && typeof arguments[1] === 'number'){
    return a+arguments[1];
  }
  else if(arguments.length==1&&typeof a === 'number'){
    return function(res){
      if(typeof res === 'number'){
        return a+res;
      }
    };
  }
}