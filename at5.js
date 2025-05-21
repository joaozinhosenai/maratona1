const readline = require('readline-sync');
let peso = parseFloat(readline.question('Digite seu peso (kg): '));
let altura = parseFloat(readline.question('Digite sua altura (m): '));

let imc = peso / (altura * altura);
console.log(`IMC: ${imc}`);