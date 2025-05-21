const readline = require('readline-sync');
let n1 = parseFloat(readline.question('Número 1: '));
let n2 = parseFloat(readline.question('Número 2: '));
let n3 = parseFloat(readline.question('Número 3: '));

let mediaGeometrica = Math.pow(n1 * n2 * n3, 1 / 3);
console.log(`Média Geométrica: ${mediaGeometrica}`);