const readline = require('readline-sync');
let palavra = readline.question('Digite uma palavra: ');

for (let letra of palavra) {
    console.log(letra);
}