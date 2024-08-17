// stack.test.js
const { JSDOM } = require('jsdom');

describe('Stack Tests', () => {
  let document;

  beforeAll(() => {
    const dom = new JSDOM(`
      <div id="top_of_stack">n/a</div>
      <button id="push">Push</button>
      <button id="pop">Pop</button>
    `);
    document = dom.window.document;
  });

  test('Initial stack should be empty', () => {
    const stackText = document.getElementById('top_of_stack').textContent;
    expect(stackText).toBe("n/a");
  });
});
