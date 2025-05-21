const readline = require('readline-sync');
let n1 = parseFloat(readline.question('Nota 1: '));
let n2 = parseFloat(readline.question('Nota 2: '));
let n3 = parseFloat(readline.question('Nota 3: '));

let media = (n1 + n2 + n3) / 3;
console.log(`Média: ${media}`);