/* 统计数组维度 */

var arr = [1,2,3,[1,2,3,1,3,[1,2,3,6,4,[1,2,3,1]]],2];
function multiarr(arr, deep){
    let newArr = []
    for (let i=0;i<arr.length;i++){
        if(arr[i] instanceof Array){
            console.log(arr[i])
             newArr.push(multiarr(arr[i], ++deep));
        }
    }
    return newArr.length ? Math.max(...newArr) : deep;
}
console.log(multiarr(arr, 1));