/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res = []
    if (!matrix.length) return []
    if (!matrix[0].length) return []
    var top = 0
    var left = 0
    var right = matrix[0].length - 1
    var bottom = matrix.length - 1
    while (true) {
        for (let i = left; i <= right; i++) res.push(matrix[top][i])
        if (++top > bottom) break
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
        if (--right < left) break
        for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
        if (--bottom < top) break
        for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
        if (++left > right) break
    }
    return res
};