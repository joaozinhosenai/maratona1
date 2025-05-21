const readline = require('readline-sync');
let num1 = parseFloat(readline.question('Digite o primeiro número: '));
let num2 = parseFloat(readline.question('Digite o segundo número: '));

let media = (num1 + num2) / 2;
console.log(`Média: ${media}`);