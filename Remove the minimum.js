/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/
function removeSmallest(numbers) {
  if(numbers.length == 0) return numbers;
  var min = numbers[0],post=0;
  for(var i =1;i<numbers.length;i++){
    if(numbers[i]<min){
      min = numbers[i];
      post = i;
    }
  }
  numbers.splice(post,1);
  return numbers;

}