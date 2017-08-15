/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
var moveZeros = function (arr) {
	var count = 0;
    for (var i = 0; i < arr.length; i++) {
    	if(String(arr[i]) != '0'){
    		arr[count++] = arr[i];
    	}
    }
    while(count < arr.length)
    	arr[count++] = 0;
    return arr;
}