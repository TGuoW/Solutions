/*
求小于等于给定数值的质数之和。
*/
function sumPrimes(num) {
  var a=[],sum=0;
  for(var i=2;i<=num;i++){
    a.push(i);
    for(var j=2;j<=i/2;j++)
      if(i%j===0){
        a.pop();
        break;
      }
  }
  for(var k in a)sum+=a[k];
  return sum;
}
