const readline = require('readline-sync');

let n1 = parseFloat(readline.question('Digite o primeiro número: '));
let n2 = parseFloat(readline.question('Digite o segundo número: '));
let n3 = parseFloat(readline.question('Digite o terceiro número: '));

let soma = n1 + n2 + n3;

if (soma > 0) console.log('Soma positiva.');
else if (soma < 0) console.log('Soma negativa.');
else console.log('Soma igual a zero.');