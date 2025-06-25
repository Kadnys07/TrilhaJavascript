let livro = new Map();
livro.set("O Senhor dos Anéis", "J.R.R. Tolkien");
livro.set("1984", "George Orwell");
livro.set("Dom Casmurro", "Machado de Assis");

console.log(livro.get("O Senhor dos Anéis"));

for (let [titulo, autor] of livro) {
    console.log(`${titulo} foi escrito por ${autor}`);
}

console.log(livro.size);
livro.delete("1984");
console.log(livro.has("1984"));
console.log(livro.has("Dom Casmurro"));

let colecaoLivros = new Map();
colecaoLivros.set("O Hobbit", { autor: "J.R.R. Tolkien", ano: 1937 });
colecaoLivros.set("1984", { autor: "George Orwell", ano: 1949 });

let colecao = Object.fromEntries(colecaoLivros);
console.log(colecao);
