let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
};
console.log(livro.titulo); // O Senhor dos Anéis

let mudandoTitulo = function(novoTitulo) {
    this.titulo = novoTitulo;
}
mudandoTitulo.call(livro, "O Hobbit");
console.log(livro.titulo); // O Hobbit

console.log(Object.keys(livro)); // ['titulo', 'autor']
console.log(Object.values(livro)); // ['O Hobbit', 'J.R.R. Tolkien']