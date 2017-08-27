/*
Task

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples

isSquare(-1) // => false
isSquare( 3) // => false
isSquare( 4) // => true
isSquare(25) // => true
isSquare(26) // => false
*/
var isSquare = function(n){
  if(n<0) return false; 
  var l=0,e=n;
  var mid;
  while(l<=e){
    mid = parseInt((l+e)/2)
    if(mid*mid == n)
      return true;
    else if(mid*mid < n)
      l=mid+1;
    else
      e=mid-1;
  }
  return false;
}