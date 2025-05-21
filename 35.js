const readline = require('readline-sync');

let a = parseFloat(readline.question('Digite o primeiro número: '));
let b = parseFloat(readline.question('Digite o segundo número: '));
let c = parseFloat(readline.question('Digite o terceiro número: '));

console.log('Maior:', Math.max(a, b, c));
console.log('Menor:', Math.min(a, b, c));