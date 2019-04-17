/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.obj = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.obj[key] = val
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    var num = 0
    Object.keys(this.obj).forEach(item => {
        if (item.slice(0, prefix.length) === prefix) {
            num += this.obj[item]
        }
    })
    return num
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */