
const utils = require('../../src/index');

test('Debe sumar correctamente', () => {
    expect(utils.suma(2, 3)).toBe(5);
});
