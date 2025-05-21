const readline = require('readline-sync');

let idade = parseInt(readline.question('Digite sua idade: '));

if (idade >= 0 && idade <= 12) console.log('Criança.');
else if (idade <= 17) console.log('Adolescente.');
else if (idade <= 59) console.log('Adulto.');
else console.log('Idoso.');