/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
*/
function solution(number){
  var res= '';
  var c=[
            ["","I","II","III","IV","V","VI","VII","VIII","IX"],
            ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
            ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
            ["","M","MM","MMM"]
        ];
  for(i = 0;i<Math.floor(number/1000);i++)res+='M';
  res+=c[2][Math.floor(number/100)%10];
  res+=c[1][Math.floor(number/10)%10];
  res+=c[0][number%10];
  return res;
}