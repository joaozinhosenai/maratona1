const readline = require('readline-sync');

let idade = parseInt(readline.question('Digite sua idade: '));

if (idade < 16) {
    console.log('Não está apto a votar.');
} else if ((idade >= 16 && idade < 18) || idade >= 70) {
    console.log('Voto opcional.');
} else {
    console.log('Voto obrigatório.');
}