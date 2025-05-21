const readline = require('readline-sync');
let nomeCompleto = readline.question('Digite seu nome completo: ');
let primeiroNome = nomeCompleto.split(' ')[0];
console.log(`Primeiro nome: ${primeiroNome}`);