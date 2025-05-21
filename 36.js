const readline = require('readline-sync');

let id1 = parseInt(readline.question('Idade da 1ª pessoa: '));
let id2 = parseInt(readline.question('Idade da 2ª pessoa: '));
let id3 = parseInt(readline.question('Idade da 3ª pessoa: '));

let maiores = [id1, id2, id3].filter(idade => idade >= 18).length;

if (maiores === 3) console.log('Todas são maiores de idade.');
else if (maiores === 0) console.log('Todas são menores de idade.');
else console.log('Alguma(s) é(são) maior(es) de idade.');