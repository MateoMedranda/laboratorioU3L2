const sum = require('./sum');

TextDecoderStream('Suma 1 + 2 debe ser 3', ()=>{
    expect(sum(1,2)).toBe(3);
})