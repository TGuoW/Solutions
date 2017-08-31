/*
In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
You can expect valid input. You won't see input like:
  // This will NOT happen
  foo=1&foo.bar=2
All properties and values will be strings — and the values should be left as strings to pass the tests.
Make sure you decode the URI components correctly
A method has been provided for testing Objects to compare objects recursively without depending on property order:
  assertSimilarObjects(myValue, expectedValue);
Use it just like Test.assertSimilar, it will call the testing framework for you.
*/

function convertQueryToMap(query) {
  if(query=="")return{}
  var arr = new Object();
  query=query.split("&");
  query=query.map((x)=>{return x.split("=")})
  var res=query.map((x)=>{return decodeURIComponent(x[1])})
  query=query.map((x)=>{return x[0].split(".")})
  for(var i=0;i<query.length;i++){
    var obj=arr;
	  for(var j=0;j<query[i].length-1;j++){
		  if(!(query[i][j] in obj))obj[query[i][j]] = {};
 		  obj = obj[query[i][j]];
    }
    obj[query[i][query[i].length-1]]=res[i];
  }
  return arr;
}