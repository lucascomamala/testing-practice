const tasks = require('./index')

// Task 1
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

// Task 2
test('reverseString(“hello”) should return “olleh”', () => {
    expect(tasks.reverseString('hello')).toBe('olleh');
});

test('reverseString(“Howdy”) should return “ydwoH”', () => {
    expect(tasks.reverseString('Howdy')).toBe('ydwoH');
});

test('reverseString(“Greetings from Earth”) should return ”htraE morf sgniteerG”', () => {
    expect(tasks.reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
});
