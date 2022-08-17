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



