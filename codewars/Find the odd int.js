/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/
function findOdd(A) {
    var tar = A[0];
    var res = 0;
    var count = 0;
    while((Math.floor(count/2) == count/2)){
    	count = 0;
        for (var i = 0; i < A.length; i++) {
  	        if(A[i] == tar){
  	    	    A.splice(i,1);
  	    	    count+=1;
  	    	    i-=1;
  	        }
  	        if(i == A.length-1&&!(Math.floor(count/2) == count/2))res = tar;
        }
        tar = A[0];
    }
    return res;
}