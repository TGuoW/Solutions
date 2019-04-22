/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    var sum = 0
    if (N === 1) return 1
    if (N === 2) return 2
    if (N === 3) return 6
    while (N > 3) {
        var res = Math.floor(N * (N - 1) / (N - 2))
        sum = sum == 0 ? sum + res + N - 3 : sum - res + N - 3
        N -= 4
    }
    return sum - (N === 3 ? 6 : N)
};

var clumsy = function(N) {
    switch(N % 4) {
        case 1 : return N == 1? 1: N + 2;
        case 2 : return N == 2? 2: N + 2;
        case 3 : return N == 3? 6: N - 1;
        default: return N == 4? 7: N + 1;
    }
};