const sum = require('./sum');

Test('Suma 1 + 2 debe ser 3', ()=>{
    expect(sum(1,2)).toBe(3);
});