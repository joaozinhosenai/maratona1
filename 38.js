const readline = require('readline-sync');

let anoNascimento = parseInt(readline.question('Digite o ano de nascimento: '));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (idade >= 16) console.log('Você está apto a votar.');
else console.log('Você NÃO está apto a votar.');