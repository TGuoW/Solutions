/*
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
*/
function multiply(a, b)
{
var resA =[],resB=[];
var res=[],RE=[];
for(var i=parseInt(a.length/8);i>=0;i--)resA[parseInt(a.length/8)-i]=Number(a.slice((a.length-i*8-8)>=0?(a.length-i*8-8):0,a.length-i*8));
for(var i=parseInt(b.length/8);i>=0;i--)resB[parseInt(b.length/8)-i]=Number(b.slice((b.length-i*8-8)>=0?(b.length-i*8-8):0,b.length-i*8));
resA.reverse();
resB.reverse();
for(var i=0;i<resA.length;i++){
  res[i]=[];
  for(var j=0;j<resB.length;j++){
    res[i][j] = (resA[i]*resB[j]).toString();
  }
}
RE[0] = res[0][0].slice(res[0][0].length-8,res[0][0].length);
RE[1] =(Number(res[0][1].slice(res[0][1].length-8,res[0][1].length))+Number(res[1][0].slice(res[1][0].length-8,res[1][0].length))+Number(res[0][0].slice(0,res[0][0].length-8))).toString();
return RE;
}