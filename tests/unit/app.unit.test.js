
const utils = require('../../src/index');

test('Debe sumar correctamente', () => {
    expect(utils.suma(2, 3)).toBe(5);
});

test('Debe multiplicar dos números correctamente', () => {
    expect(utils.multiplica(4, 5)).toBe(20);
});
