/*
设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.
*/

function checkCashRegister(price, cash, cid) {
  var change = cash-price;
  var res=[];
  var sum=cid.reduce(function(a,b){
    return a[1]+b[1];
  });
  cid.sort(function(a,b){
    return a[1]-b[1];
  });
  for(var i=cid.length-1;i>=0;i--){
    if(change>=cid[i][1]){
      res.push(cid[i]);
      change-=cid[i][1];
    }
      
  }
  if(change===0&&res.length==cid.length)return "Closed";
  else if(change>0) return "Insufficient Funds";
  else return res;
}