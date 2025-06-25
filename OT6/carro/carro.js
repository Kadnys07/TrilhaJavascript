let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "preto",
}
console.log(carro.modelo); // Saída: Corolla

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}   
