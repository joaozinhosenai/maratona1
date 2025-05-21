const readline = require('readline-sync');
let palavra1 = readline.question('Primeira palavra: ');
let palavra2 = readline.question('Segunda palavra: ');

let resultado = palavra1 + palavra2;
console.log(`Resultado: ${resultado}`);