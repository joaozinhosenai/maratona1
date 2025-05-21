const readline = require('readline-sync');
let forca = parseFloat(readline.question('Força (N): '));
let distancia = parseFloat(readline.question('Distância (m): '));

let trabalho = forca * distancia;
console.log(`Trabalho: ${trabalho}`);