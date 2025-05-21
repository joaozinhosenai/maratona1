const readline = require('readline-sync');
let num1 = parseInt(readline.question('Digite o primeiro número: '));
let num2 = parseInt(readline.question('Digite o segundo número: '));

if (num1 > num2) {
    console.log(`O maior número é: ${num1}`);
} else if (num2 > num1) {
    console.log(`O maior número é: ${num2}`);
} else {
    console.log('Os dois números são iguais.');
}