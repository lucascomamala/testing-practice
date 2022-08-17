// Task 1
function stringLength(str) {
    if (str.length < 1) throw new TypeError('0 length string');
    else if (str.length > 10) throw new TypeError('string length > 10');
    else return str.length;
}

exports.stringLength = stringLength;
