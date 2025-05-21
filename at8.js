const readline = require('readline-sync');
let a = parseFloat(readline.question('Coeficiente a: '));
let b = parseFloat(readline.question('Coeficiente b: '));
let c = parseFloat(readline.question('Coeficiente c: '));

let delta = b * b - 4 * a * c;
if (delta >= 0) {
    let r1 = (-b + Math.sqrt(delta)) / (2 * a);
    let r2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Raízes: ${r1}, ${r2}`);
} else {
    console.log('Não há raízes reais.');
}