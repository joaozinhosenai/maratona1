const readline = require('readline-sync');
let deltaS = parseFloat(readline.question('Variação de espaço (m): '));
let deltaT = parseFloat(readline.question('Variação de tempo (s): '));

let velocidadeMedia = deltaS / deltaT;
console.log(`Velocidade média: ${velocidadeMedia}`);