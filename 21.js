const readline = require('readline-sync');
let palavra = readline.question('Digite uma palavra: ');

let inverso = palavra.split('').reverse().join('');
if (palavra === inverso) {
    console.log('É palíndromo.');
} else {
    console.log('Não é palíndromo.');
}