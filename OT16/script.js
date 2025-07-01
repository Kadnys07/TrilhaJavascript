/*
Crie uma variável qualquer, que receba um array com alguns valores
aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let valoresAleatorios = [42, 'texto', true, null, { chave: 'valor' }];
/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(array) {
  return array;
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray(valoresAleatorios)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores;
e o
segundo, um número. A função deve retornar o valor de um índice do array
que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o
número passado no
segundo parâmetro.
*/
function retornaIndice(array, indice) {
  return array[indice];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let arrayDiversificado = [10, 'texto', false, { chave: 'valor' }, [1, 2, 3]];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaIndice(arrayDiversificado, 0)); // 10
console.log(retornaIndice(arrayDiversificado, 1)); // 'texto'
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome
do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- `quantidadePaginas` - Number (quantidade de páginas)
- `autor` - String
- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
  const livros = {
    "O Senhor dos Anéis": {
      quantidadePaginas: 1216,
      autor: "J.R.R. Tolkien",
      editora: "HarperCollins"
    },
    "1984": {
      quantidadePaginas: 328,
      autor: "George Orwell",
      editora: "Companhia das Letras"
    },
    "Dom Casmurro": {
      quantidadePaginas: 384,
      autor: "Machado de Assis",
      editora: "Editora Abril"
    }
  };

  if (nomeLivro) {
    return livros[nomeLivro] || null;
  }
  
  return livros;
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro
qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro "O Senhor dos Anéis" tem ${book("O Senhor dos Anéis").quantidadePaginas} páginas!`);
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer,
usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro "1984" é ${book("1984").autor}.`);
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer,
usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro "Dom Casmurro" foi publicado pela editora ${book("Dom Casmurro").editora}.`);