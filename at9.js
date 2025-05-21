const readline = require('readline-sync');
let largura = parseFloat(readline.question('Largura do retângulo: '));
let comprimento = parseFloat(readline.question('Comprimento do retângulo: '));

let perimetro = 2 * (largura + comprimento);
let area = largura * comprimento;
console.log(`Perímetro: ${perimetro}`);
console.log(`Área: ${area}`);