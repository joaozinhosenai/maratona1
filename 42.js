const readline = require('readline-sync');

let peso = parseFloat(readline.question('Digite seu peso (kg): '));
let altura = parseFloat(readline.question('Digite sua altura (m): '));

let imc = peso / (altura * altura);

console.log('Seu IMC é:', imc.toFixed(2));

if (imc < 18.5) console.log('Abaixo do peso.');
else if (imc < 25) console.log('Peso normal.');
else if (imc < 30) console.log('Sobrepeso.');
else if (imc < 40) console.log('Obesidade.');
else console.log('Obesidade grave.');