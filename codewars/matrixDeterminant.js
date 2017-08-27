/*
Write a function that accepts a square matrix (n x n 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases: A 1x1 matrix |a| has determinant a. A 2x2 matrix [[a, b], [c, d]] or

|a b|
|c d|

has determinant ad - bc.

The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n n-1 x n-1 matrices. For the 3x3 case, [[a, b, c], [d, e, f], [g, h, i]] or

|a b c|
|d e f|
|g h i|

the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs, or

|e f|
|h i|

Note the alternation of signs.

The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)
*/
function determinant(m) {
  var sum = 0;
  if(m.length == 1)return m[0][0];
  for(var i = 0;i < m.length;i++){
    if(Math.floor(i/2) == i/2) sum+=(m[i][0]*s(m,i));
    else sum-=(m[i][0]*s(m,i));
  }
  return sum;
};
function s(A,i){
  if(A.length == 2)return A[1-i][1];
  var B = [];
  var C = [];
  for(var g =0;g<A.length;g++){
    C[g] = [];
    for(var b =0;b<A.length;b++)
    C[g][b] = A[g][b];
  }
  for(var k=0;k<A.length;k++)
		C[k].splice(0,1)
	  for (var j = 0; j < A.length; j++) {
  	if(j<i) B[j] = C[j];
  	if(j>i) B[j-1] = C[j];
  }
  var sum = 0;
  for(var p = 0;p < B.length;p++){
    if(Math.floor(p/2) == p/2) sum+=(B[p][0]*s(B,p));
    else sum-=(B[p][0]*s(B,p));
  }
  return sum;
}
// function s(A,i){
//   if(A.length == 1)return A[0][0];
//   var B = [];

//   for (var j = 0; i < A.length; i++) {
//   	if(j<i) B[j] = A[j];
//   	if(j>i) B[j-1] = A[j];
//   }
//   for (var k = 0; k < B.length; k++) {
//   	B[k].splice(0,1);
//   }
//   var sum = 0;
//   for(var i = 0;i < B.length;i++){
//     if(Math.floor(i/2) == i/2) sum-=B[i][0]*s(B,i);
//     else sum+=B[i][0]*s(B,i);
//   }
//   return sum;
// }