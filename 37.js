const readline = require('readline-sync');

let l1 = parseFloat(readline.question('Digite o lado 1: '));
let l2 = parseFloat(readline.question('Digite o lado 2: '));
let l3 = parseFloat(readline.question('Digite o lado 3: '));

if (l1 + l2 > l3 && l1 + l3 > l2 && l2 + l3 > l1) {
    console.log('Os números podem formar um triângulo.');
} else {
    console.log('Os números NÃO podem formar um triângulo.');
}