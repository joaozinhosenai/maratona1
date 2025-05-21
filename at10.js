const readline = require('readline-sync');
let a = parseFloat(readline.question('Lado a: '));
let b = parseFloat(readline.question('Lado b: '));
let c = parseFloat(readline.question('Lado c: '));
let h = parseFloat(readline.question('Altura: '));

let perimetro = a + b + c;
let area = (b * h) / 2;
console.log(`Perímetro: ${perimetro}`);
console.log(`Área: ${area}`);