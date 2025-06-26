let animal = new Object(nome, som);
animal.nome = "Cachorro";
animal.som = "latido";
   
animal.falar = function() {
    return `O ${this.nome} faz um ${this.som}`;
}

console.log(animal.falar()); // O Cachorro faz um latido

