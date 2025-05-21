const readline = require('readline-sync');

let num1 = parseInt(readline.question('Digite o primeiro número: '));
let num2 = parseInt(readline.question('Digite o segundo número: '));

if (num2 !== 0 && num1 % num2 === 0) {
    console.log('O primeiro é divisível pelo segundo.');
} else {
    console.log('O primeiro NÃO é divisível pelo segundo.');
}