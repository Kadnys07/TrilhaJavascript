// Jogo de adivinhação de números
let numSorteado = Math.floor(Math.random() * 5) + 1;
let num = parseInt(prompt("Adivinhe o número sorteado entre 1 e 5:"));

while (num !== numSorteado) {
    num = parseInt(prompt("Tente novamente! Adivinhe o número sorteado entre 1 e 5:"));
}
alert(`Parabéns! Você adivinhou o número sorteado: ${numSorteado}`);

