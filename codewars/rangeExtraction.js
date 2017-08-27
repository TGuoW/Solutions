/*
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/
function solution(list){
	var i=0,j=1;
	var res=''+list[i];
	while(j<list.length){
		if(list[j]-list[i]!=1){
			res = res + ',' + list[j]
			i = j;
			j++;
		}
		else if(list[j]-list[i]==1){
			if(judge(list,i,j)==0)
				res = res+','+list[j];
			else
				res = res+'-'+list[i+judge(list,i,j)+1]
			j=i+judge(list,i,j)+2;
			i=i+judge(list,i,j)+1;
		}
	}
	return res;
}
function judge(list,i,j){
	j++;
	if(list[j]-list[i]==j-i){ 
	    return 1+judge(list,i,j);
	}
	else return 0;
}