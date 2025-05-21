const readline = require('readline-sync');
let num1 = parseInt(readline.question('Digite o primeiro número: '));
let num2 = parseInt(readline.question('Digite o segundo número: '));
let num3 = parseInt(readline.question('Digite o terceiro número: '));

let maior = Math.max(num1, num2, num3);
console.log(`O maior número é: ${maior}`);