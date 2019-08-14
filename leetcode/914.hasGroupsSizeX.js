/**
 * @param {number[]} deck
 * @return {boolean}
 */
function gcd(a, b) {
    if (a % b === 0) {
        return b;
    }
    return arguments.callee(b, a % b);
}
var hasGroupsSizeX = function(deck) {
    if (deck.length < 2) return false
    deck.sort((a, b) => a - b)
    var cur
    var tmp = []
    deck.forEach(item => {
        if (item === cur) {
            tmp[tmp.length - 1]++
        } else {
            tmp.push(1)
            cur = item
        }
    })
    var target = Math.min(...tmp)
    return tmp.every(item => {
        return gcd(item, target) > 1
    })
};