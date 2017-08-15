/*
Given: an array containing hashes of names
Return: a string formatted as a list of names 
separated by commas except for the last two 
names, which should be separated by an ampersand.

Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/
function list(names){
  
  if(names.length == 0) return '';
  var res = names[0].name;
  for(var i=1;i<names.length;i++){
    if(i==names.length-1)
      res = res + ' & ' + names[i].name;
    else
      res = res + ', ' + names[i].name;
  }
  return res;
}