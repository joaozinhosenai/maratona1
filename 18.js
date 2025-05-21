const readline = require('readline-sync');
let frase = readline.question('Digite uma frase: ');

let novaFrase = frase.replace(/a/g, 'e');
console.log(`Nova frase: ${novaFrase}`);