/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const result = []
    for (let i=0; i<n; i++) {
        result[i] = ""
        if((i+1)%3 === 0) {
            result[i] += "Fizz";
        }
        if ((i+1)%5 === 0) {
            result[i] += "Buzz";
        }
        if (result[i] === "") {
            result[i] += String(i+1);
        }
    }
    return result
};