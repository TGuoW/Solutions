/**
 * @param {string[]} ops
 * @return {number}
 */
class Points {
    constructor () {
        this.arr = []
    }
    add (val) {
        this.arr.push(Number(val))
    }
    pop () {
        this.arr.pop()
    }
    double () {
        this.arr.push(this.arr[this.arr.length - 1] * 2)
    }
    sum () {
        var sum = this.arr[this.arr.length - 1] + this.arr[this.arr.length - 2]
        this.arr.push(sum)
    }
    result () {
        return this.arr.reduce((a, b) => a + b)
    }
}
var calPoints = function(ops) {
    var points = new Points()
    ops.forEach(item => {
        switch (item) {
            case 'C':
                points.pop()
                break
            case 'D':
                points.double()
                break
            case '+':
                points.sum()
                break
            default:
                points.add(item)
        }
    })
    return points.result()
};