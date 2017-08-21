/*
依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.
*/
function updateInventory(arr1, arr2) {
    // 请保证你的代码考虑到所有情况
  for(var i=0;i<arr2.length;i++){
    for(var j=0;j<arr1.length;j++){
      if(arr2[i][1]===arr1[j][1]){
        arr1[j][0]+=arr2[i][0];
        arr2.splice(i,1);
        i-=1;
        break;
      }
    }
  }
  for(var k=0;k<arr2.length;k++)arr1.push(arr2[k]);
  
  arr1.sort(function(a,b){
    return a[1].charCodeAt(0)-b[1].charCodeAt(0);
  });
    return arr1;
}

// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);