const stack = require('../src/stack.js');

beforeEach(() => {
    // Rensa stacken innan varje test
    while (stack.peek() !== undefined) {
        stack.pop();
    }
});

test('Initial stack should be empty', () => {
    expect(stack.peek()).toBeUndefined();
});

test('Push button adds item', () => {
    stack.push('TestItem');
    expect(stack.peek()).toBe('TestItem');
});

test('Pop button removes item', () => {
    stack.push('ItemToPop');
    expect(stack.pop()).toBe('ItemToPop');
    expect(stack.peek()).toBeUndefined();
});
