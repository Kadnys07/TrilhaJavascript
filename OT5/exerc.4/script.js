let peso = (Math.random() * 150).toFixed(0);
let altura = (Math.random() * 2 + 1).toFixed(2);

let imc = calculaIMC(peso, altura);

function calculaIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}
alert("Peso: " + peso + " kg\nAltura: " + altura + " m\nIMC: " + imc);