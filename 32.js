const readline = require('readline-sync');
let nota1 = parseFloat(readline.question('Digite a nota da primeira prova: '));
let nota2 = parseFloat(readline.question('Digite a nota da segunda prova: '));

let media = (nota1 + nota2) / 2;
if (media >= 6) {
    console.log('Aluno aprovado.');
} else {
    console.log('Aluno reprovado.');
}