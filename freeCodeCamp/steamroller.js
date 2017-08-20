/*
对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
*/

function steam(ar,n){
  for(var i=0;i<ar.length;i++){
    if(Array.isArray(ar[i])){
      steam(ar[i],n);
    }
    else n.push(ar[i]);
  }
}
function steamroller(arr) {
  var n = [];
  steam(arr,n);
  return n;
}