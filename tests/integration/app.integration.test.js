const app = require('../../src/index');

test('Debe realizar una operación completa (suma y multiplicación)', () => {
    const suma = app.suma(2, 3);
    const resultado = app.multiplica(suma, 4);
    expect(resultado).toBe(20);
});
