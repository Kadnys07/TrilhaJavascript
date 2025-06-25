

let altura = (Math.random() * 10).toFixed(2) + 1;
console.log("A altura do triângulo é: " + altura + " m²");
let largura = (Math.random() * 10).toFixed(2) + 1;
console.log("A largura do triângulo é: " + largura + " m²");
function calcularArea(altura, largura) {
    return (altura * largura).toFixed(2);
}
console.log("A área do retângulo é: " + calcularArea(altura, largura) + " m²");
