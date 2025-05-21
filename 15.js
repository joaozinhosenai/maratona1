const readline = require('readline-sync');
let raio = parseFloat(readline.question('Raio da esfera: '));

let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
console.log(`Volume da esfera: ${volume}`);
