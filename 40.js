const readline = require('readline-sync');

let nota1 = parseFloat(readline.question('Digite a primeira nota: '));
let nota2 = parseFloat(readline.question('Digite a segunda nota: '));
let nota3 = parseFloat(readline.question('Digite a terceira nota: '));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) console.log('Aprovado.');
else if (media < 4) console.log('Reprovado.');
else console.log('Recuperação.');