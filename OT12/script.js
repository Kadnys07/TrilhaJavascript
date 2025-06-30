let frutas = ["maçã", "banana", "laranja", "uva"];
let carnes = ["frango", "bife", "peixe"];
let compras = frutas.concat(carnes);
console.log(compras);

// Usuario:
let usuario = {nome:"Jonas", email:"Jonas@gmail.com" };
let novoUsuario = { ...usuario, status: "ativo" };
console.log(novoUsuario);

// Festa de Aniversário
let convidados = ["Ana", "Bruno", "Carlos"];

function listarConvidados(convidados) {
    return `Convidados: ${convidados.join(", ")}`;
}
console.log(listarConvidados(convidados));

// Musicas Array

let musicas = ["Bohemian Rhapsody", "Imagine", "Hotel California"];
let cloneMusicas = [...musicas, "Stairway to Heaven", "Smells Like Teen Spirit"];
console.log(musicas);
console.log(cloneMusicas);

//Filme
let filme = { nome: "Inception", diretor: "Christopher Nolan"};
let infoFilme = {ano: 2010, genero: "Sci-Fi" };
let filmeCompleto = { ...filme, ...infoFilme };
console.log(filmeCompleto);

