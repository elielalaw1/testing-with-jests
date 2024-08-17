import * as stack from './stack.js';

beforeEach(() => {
    // Återställ stacken till tom innan varje test
    stack.stack = [];
});

test('Initial stack should be empty', () => {
    expect(stack.peek()).toBeUndefined(); // Stacken bör vara tom
});

test('Push should add item to stack', () => {
    stack.push("Item");
    expect(stack.peek()).toBe("Item"); // Översta elementet bör vara "Item"
});

test('Pop should remove item from stack', () => {
    stack.push("Item");
    stack.pop();
    expect(stack.peek()).toBeUndefined(); // Stacken bör vara tom efter pop
});
