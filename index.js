// Task 1
function stringLength(str) {
    if (str.length < 1) throw new TypeError('0 length string');
    else if (str.length > 10) throw new TypeError('string length > 10');
    else return str.length;
}

// Task 2
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Task 3
class Calculator {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        return a / b;
    }
}

exports.stringLength = stringLength;
exports.reverseString = reverseString;
exports.Calculator = Calculator;
