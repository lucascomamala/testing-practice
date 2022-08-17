const tasks = require('./index')
// console.log(tasks.Calculator.add(1,2))
// Task 1
describe('String Length', () => {
    test('"Hello" expects 5', () => {
        expect(tasks.stringLength('Hello')).toBe(5);
    });

    test('"" expects Error', () => {
        try {
            tasks.stringLength('');
            // Fail test if above expression doesn't throw anything.
            expect(true).toBe(false);
        } catch (e) {
            expect(e.message).toBe('0 length string');
        }
    });

    test('"parangaricutirimicuaro" expects Error', () => {
        try {
            tasks.stringLength('parangaricutirimicuaro');
            // Fail test if above expression doesn't throw anything.
            expect(true).toBe(false);
        } catch (e) {
            expect(e.message).toBe('string length > 10');
        }
    });
});

// Task 2
describe('Reverse String', () => {
    test('reverseString(“hello”) should return “olleh”', () => {
        expect(tasks.reverseString('hello')).toBe('olleh');
    });

    test('reverseString(“Howdy”) should return “ydwoH”', () => {
        expect(tasks.reverseString('Howdy')).toBe('ydwoH');
    });

    test('reverseString(“Greetings from Earth”) should return ”htraE morf sgniteerG”', () => {
        expect(tasks.reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
    });
});

// Task 3
describe('Calculator', () => {
    test('add(13, 5) expects 18', () => {
        expect(tasks.Calculator.add(13, 5)).toBe(18);
    });
    test('subtract(29, 9) expects 20', () => {
        expect(tasks.Calculator.subtract(29, 9)).toBe(20);
    });
    test('multiply(5, 5) expects 25', () => {
        expect(tasks.Calculator.multiply(5, 5)).toBe(25);
    });
    test('divide(64, 8) expects 8', () => {
        expect(tasks.Calculator.divide(64, 8)).toBe(8);
    });
});

describe('Capitalize', () => {
    test('"lucas" expects "Lucas"', () => {
        // expect(tasks.Calculator.add(13, 5)).toBe(18);
        expect(tasks.capitalize('lucas')).toBe('Lucas');
    });
    test('"microverse" expects "Microverse"', () => {
        // expect(tasks.Calculator.add(13, 5)).toBe(18);
        expect(tasks.capitalize('microverse')).toBe('Microverse');
    });
});