let maiuscula = prompt("Digite uma palavra maiúscula:").toUpperCase();



let minuscula = converteMaiusculaParaMinuscula(maiuscula);

function converteMaiusculaParaMinuscula(maiuscula) {
    return maiuscula.toLowerCase();
}   
alert("A palavra em maiúscula é: " + maiuscula + "\nA palavra em minúscula é: " + minuscula);