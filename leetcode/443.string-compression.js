/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var i = 0, index = 0;
    while (i < chars.length) {
        var ch = chars[i];
        var count = 0;
        while (i < chars.length && chars[i] == ch) {
            i++;
            count++;
        }
        chars[index++] = ch;
        if (count != 1) {
            var str = count.toString().split('');
            for (var idx = 0; idx < str.length; idx++) {
                chars[index++] = str[idx]
            }
        }
    }
    return index;
};