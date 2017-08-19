/*
写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
*/

function unite(arr1) {
  for(var j=1; j<arguments.length; j++){
    arr1=arr1.concat(arguments[j].filter(function(num){
      for(var i=0; i<arr1.length; i++){
        if(arr1[i]==num){
          return false;
        }
      }
      return true;
    }));
  } 
  return arr1;
}