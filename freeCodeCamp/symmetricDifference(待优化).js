/*
创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
*/

function sym(args) {
  var res=[];
  for(var i = 0; i < arguments.length; i++){
    res.push(arguments[i]);
  }
  for(var k=0;k<res.length;k++){
    for(var m=1;m<res[k].length;m++){
      if(res[k][m]==res[k][m-1]){
        res[k].splice(m-1,1);
        m-=1;
      }
    }
  }
  return res.reduce(function(a,b){
    for(var j=0;j<a.length;j++){
      if(b.indexOf(a[j])!=-1){
        b.splice(b.indexOf(a[j]),1);
        a.splice(j,1);
        j-=1;
      }
    }
    return a.concat(b);
  });
}