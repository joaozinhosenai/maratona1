const readline = require('readline-sync');

let dia = readline.question('Digite um dia da semana: ').toLowerCase();

if (['segunda', 'terca', 'terça', 'quarta', 'quinta', 'sexta'].includes(dia)) {
    console.log('Dia útil.');
} else if (['sabado', 'sábado', 'domingo'].includes(dia)) {
    console.log('Fim de semana.');
} else {
    console.log('Dia inválido.');
}