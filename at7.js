const readline = require('readline-sync');
let raio = parseFloat(readline.question('Raio do círculo: '));

let area = Math.PI * Math.pow(raio, 2);
console.log(`Área: ${area}`);