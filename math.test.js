const Operacion = require('./math');

const op = new Operacion();

test('Factorial de 5 debería dar 120', () =>{
    expect(op.factorial(5)).toBe(120);
});

test('Fibonnaci de 6 debería dar 8', ()=>{
    expect(op.fibonacci(6)).toBe(4);
});

