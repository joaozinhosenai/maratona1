const readline = require('readline-sync');
let palavra = readline.question('Digite uma palavra: ').toLowerCase();
let quantidadeVogais = (palavra.match(/[aeiou]/g) || []).length;
console.log(`Quantidade de vogais: ${quantidadeVogais}`);