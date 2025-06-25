let numero = prompt("Digite um numero:");

function verificaNumero(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

while (isNaN(numero)) {
    numero = prompt("Digite um número válido:");
}

switch (verificaNumero(numero)) {
    case true:
        alert("O número " + numero + " é par.");
        break;
    case false:
        alert("O número " + numero + " é ímpar.");
        break;
}