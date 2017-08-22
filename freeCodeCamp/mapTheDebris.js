/*
返回一个数组，其内容是把原数组中对应元素的平均海拔转换成其对应的轨道周期.
*/
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(var i=0;i<arr.length;i++){
    arr[i].orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt,3) / GM));
    delete arr[i].avgAlt;
  }
  return arr;
}
