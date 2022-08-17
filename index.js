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

// Task 4
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

exports.stringLength = stringLength;
exports.reverseString = reverseString;
exports.Calculator = Calculator;
exports.capitalize = capitalize;
