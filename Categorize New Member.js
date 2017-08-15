/*
Input

Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Example Input

[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
Output

Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example Output

["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/
function openOrSenior(data){
	var res = [];
    for (var i = 0; i < data.length; i++) {
    	if(data[i][0] > 54 && data[i][1] > 7){
            res.push('Senior');
    	}else{
    		res.push('Open');
    	}
    }
    return res;
}