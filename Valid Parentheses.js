/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples: 
validParentheses( "()" ) => returns true 
validParentheses( ")(()))" ) => returns false 
validParentheses( "(" ) => returns false 
validParentheses( "(())((()())())" ) => returns true 
*/
function validParentheses(parens){
    var res = [];
    for(var i = 0;i < parens.size();i++)
    	if(parens[i] == '(' && res.length>0)
    		res.push('(');
    	else
    		res.pop();
    if(res.length == 0) return true;
    else return false;
}