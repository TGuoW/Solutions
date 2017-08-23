/*
举个例子：有一个能力数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。而7在数组的索引为0，13在数组的索引为3，9在数组的索引为1，11在数组的索引为2。

所以我们说函数：pairwise([7,9,11,13,15],20) 的返回值应该是0+3+1+2的和，即6。
*/
function pairwise(arr, arg) {
  var res=[];
  var newarr = arr.map(function(x){
    return [x,1];
  });
  for(var i=0;i<newarr.length;i++){
    for(var j=i+1;j<newarr.length;j++){
      if(newarr[i][0]+newarr[j][0]==arg&&newarr[j][1]&&newarr[i][1]){
        res.push([i,j]);
        newarr[j][1]=0;
        break;
      }
    }
  }
  return res.reduce(function(a,b){
    return a+b[0]+b[1];
  },0);
}