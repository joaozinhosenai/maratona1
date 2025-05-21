const readline = require('readline-sync');
let num1 = parseInt(readline.question('Digite o primeiro número: '));
let num2 = parseInt(readline.question('Digite o segundo número: '));
let num3 = parseInt(readline.question('Digite o terceiro número: '));

let soma = num1 + num2 + num3;
if (soma % 5 === 0) {
    console.log('A soma dos números é divisível por 5.');
} else {
    console.log('A soma dos números não é divisível por 5.');
}