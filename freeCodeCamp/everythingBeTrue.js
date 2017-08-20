/*
完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。函数返回ture。反之，返回false。
*/
function every(collection, pre) {
  // Is everyone being true?
  return collection.every(function(value){return value.hasOwnProperty(pre)&&value[pre];});
}