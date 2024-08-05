const add = require('./index');

// eslint-disable-next-line no-undef
test('sums return should be 6', () => {
  // eslint-disable-next-line no-undef
  expect(add([1, 2, 3])).toBe(6);
});
