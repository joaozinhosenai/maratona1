const readline = require('readline-sync');

let numero = parseInt(readline.question('Digite um número: '));

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('É divisível por 3 e por 5.');
} else {
    console.log('Não é divisível por 3 e por 5 ao mesmo tempo.');
}