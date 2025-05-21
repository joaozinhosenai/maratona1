const readline = require('readline-sync');
let massa = parseFloat(readline.question('Massa (kg): '));
let velocidade = parseFloat(readline.question('Velocidade (m/s): '));

let energiaCinetica = (massa * Math.pow(velocidade, 2)) / 2;
console.log(`Energia Cinética: ${energiaCinetica}`);