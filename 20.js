const readline = require('readline-sync');
let nome = readline.question('Digite seu nome: ');

if (nome[0].toUpperCase() === 'A') {
    console.log('O nome começa com A.');
} else {
    console.log('O nome não começa com A.');
}