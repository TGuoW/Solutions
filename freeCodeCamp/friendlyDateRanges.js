/*
让日期区间更友好！

把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。

易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).

记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，则结束日期就不用写年份了；在这种情况下，如果月份开始和结束日期如果在同一个月，则结束日期月份也不用写了。

另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。
*/
function makeFriendlyDates(arr) {
  var res= [];
  var month =['January','February','March','April','May','June','July','August','September','October','November','December'];
  var day = ['st','nd','rd','th'];
  for(var i=0;i<arr.length;i++){
    arr[i]=arr[i].split("-");
    res[i]=month[Number(arr[i][1]-1)]+" "+Number(arr[i][2])+day[Number(arr[i][2][1])<=3&&Number(arr[i][2][1])>0&&Number(arr[i][2][0]!="1")?Number(arr[i][2][1])-1:3]+", "+Number(arr[i][0]);
  }
  var change=-((Number(arr[0][0])-Number(arr[1][0]))*365+(Number(arr[0][1])-Number(arr[1][1]))*30+Number(arr[0][2])-Number(arr[1][2]));
  if(change<0)return "";
  if(change<365){
    res[1]=res[1].substr(0,res[1].length-6);
  }
  if(arr[0][1]==arr[1][1]&&arr[0][0]==arr[1][0])res[1]=res[1].split(" ")[1];
  
  if(arr[0][0]=="2017"&&change<365){
    res[0]=res[0].substr(0,res[0].length-6);
  }
  if(arr[0][1]==arr[1][1]&&arr[0][0]==arr[1][0]&&arr[0][2]==arr[1][2])res.pop();
  return res;
}