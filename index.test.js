const {sayhello} = require('./');
test('test with valid name',() => {
    expect(sayhello('harsha')).toBe('hello harsha');
});
test('test with default name',() => {
    expect(sayhello()).toBe('hello world');
});
