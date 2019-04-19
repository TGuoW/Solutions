
var MyCalendar = function() {
    this.arr = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let arr = this.arr
    if (!arr.length) {
        return Boolean(arr.push([start, end]))
    }
    if (arr[0][0] >= end) {
        this.arr.unshift([start, end])
        return true
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] >= end) {
            if (arr[i - 1] && arr[i - 1][1] <= start) {
                this.arr = [...arr.slice(0, i), [start, end], ...arr.slice(i, arr.length)]
                return true
            }
        }
    }
    if (arr[arr.length - 1][1] <= start) {
        this.arr.push([start, end])
        return true
    }
    return false
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

class MyCalendar {
    constructor() {
        this.booked = [];
    }

    book(start, end) {
        for (let i = 0; i < this.booked.length; i++) {
            const [bookedStart, bookedEnd] = this.booked[i];
            if (start < bookedEnd && end > bookedStart) return false;
        }
        this.booked.push([start, end]);
        return true;
    }
};