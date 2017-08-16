/*
#Pascal's Triangle

Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle

Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.

For example:

pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]
*/
function pascalsTriangle(n) {
    var c = [[1],[1,1]];
    for(var i=2;i<n;i++){
    	c[i]=[];
  	    c[i][0]=1;
        c[i][i]=1;
  	    for(var j=1;j<i;j++){
  		    c[i][j]=c[i-1][j-1]+c[i-1][j];
  	    }
    }
    var res = [];
    for(var i=0;i<n;i++){
    	for(var j=0;j<=i;j++)
    		res.push(c[i][j])
    }
    return res;
}