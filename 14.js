const readline = require('readline-sync');
let x1 = parseFloat(readline.question('Coordenada x1: '));
let y1 = parseFloat(readline.question('Coordenada y1: '));
let x2 = parseFloat(readline.question('Coordenada x2: '));
let y2 = parseFloat(readline.question('Coordenada y2: '));

let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
console.log(`Distância entre os pontos: ${distancia}`);