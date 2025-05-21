const readline = require('readline-sync');
let raio = parseFloat(readline.question('Raio do círculo: '));

let perimetro = 2 * Math.PI * raio;
console.log(`Perímetro: ${perimetro}`);