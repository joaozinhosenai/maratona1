const readline = require('readline-sync');
let num = parseInt(readline.question('Digite um número: '));

if (num % 2 === 0) {
    console.log('O número é par.');
} else {
    console.log('O número é ímpar.');
}