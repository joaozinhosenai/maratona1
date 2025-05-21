const readline = require('readline-sync');
let frase = readline.question('Digite uma frase: ');
let espacos = (frase.match(/\s/g) || []).length;
console.log(`Quantidade de espaços: ${espacos}`);