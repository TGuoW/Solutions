/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var pos = [0, 0]
    moves = moves.split('')
    moves.forEach(item => {
        switch (item) {
            case 'R':
                pos[0]++
                break
            case 'L':
                pos[0]--
                break
            case 'U':
                pos[1]++
                break
            case 'D':
                pos[1]--
                break
        }
    })
    return !pos[0] && !pos[1]
};