let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    
    detalhes: function() {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
};
console.log(carro.detalhes()); // Carro: Toyota Corolla, Ano: 2020