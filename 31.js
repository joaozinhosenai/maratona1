const readline = require('readline-sync');
let nota1 = parseFloat(readline.question('Digite a nota da primeira prova: '));
let nota2 = parseFloat(readline.question('Digite a nota da segunda prova: '));

if (nota1 >= 6 && nota2 >= 6) {
    console.log('Aluno aprovado em ambas as provas.');
} else if (nota1 < 6 && nota2 < 6) {
    console.log('Aluno reprovado em ambas as provas.');
} else {
    console.log('Aluno aprovado em uma prova e reprovado na outra.');
}