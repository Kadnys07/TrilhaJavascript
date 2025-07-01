// Nesse exercício, você está livre para escolher os nomes para suas variáveis e
// funções! 😄
// // Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
// ?
function soma(a, b) {
  return a + b;
}  
console.log(soma(2, 3));

// // Declare uma variável que receba a invocação da função criada acima,
// passando dois números quaisquer por argumento, e somando `5` ao resultado
// retornado da função.
// ?

let resultadoSoma = soma(2, 3) + 5;
console.log(resultadoSoma);
// // Qual o valor atualizado dessa variável?
// ?
// R:12
// // Declare uma nova variável, sem valor.
// ?
let valorVariavel;
// /*
// Crie uma função que adicione um valor à variável criada acima, e retorne a
// string:
// O valor da variável agora é VALOR.

// Onde VALOR é o novo valor da variável?
// R: Dentro da função, a variável `valorVariavel` é atualizada com o novo valor
// // Invoque a função criada acima.


// // Qual o retorno da função? (Use comentários de bloco).
// ?

function atualizarValor(novoValor) {
    valorVariavel = novoValor;
    return `O valor da variável agora é ${valorVariavel}.`;
    }
    console.log(atualizarValor(10));
// /*
// Crie uma função com as seguintes características:
// 1. A função deve receber 3 argumentos;
// 2. Se qualquer um dos três argumentos não estiverem preenchidos, a função
// deve retornar a string:
// Preencha todos os valores corretamente!
// 3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando
// `2` ao resultado da multiplicação.
// */
// ?
function multiplicar(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
        return "Preencha todos os valores corretamente!";
    }
    return (a * b * c) + 2;
}
// // Invoque a função criada acima, passando só dois números como argumento.
// ?
console.log(multiplicar(2, 3)); // Preencha todos os valores corretamente!
// // Qual o resultado da invocação acima? (Use comentários para mostrar o
// valor retornado).
// ?
// // Agora invoque novamente a função criada acima, mas passando todos os
// três argumentos necessários.
// ?
console.log(multiplicar(2, 3, 4)); // 26
// // Qual o resultado da invocação acima? (Use comentários para mostrar o
// // valor retornado).

// Crie uma função com as seguintes características:
// 1. A função deve receber 3 argumentos.
// 2. Se somente um argumento for passado, retorne o valor do argumento.
// 3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
// 4. Se todos os argumentos forem passados, retorne a soma do primeiro com o
// segundo, e o resultado, dividido pelo terceiro.
// 5. Se nenhum argumento for passado, retorne o valor booleano `false`.
// 6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
// */
function calcular(a, b, c) {
    if (a === undefined && b === undefined && c === undefined) {
        return false;
    } else if (a !== undefined && b === undefined && c === undefined) {
        return a;
    } else if (a !== undefined && b !== undefined && c === undefined) {
        return a + b;
    } else if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    } else {
        return null;
    }
}
// // Invoque a função acima utilizando todas as possibilidades (com nenhum
// // argumento, com um, com dois e com três.) Coloque um comentário de linha
// // ao lado da função com o resultado de cada invocação.
console.log(calcular()); // false
console.log(calcular(5)); // 5
console.log(calcular(5, 10)); // 15
console.log(calcular(5, 10, 2)); // 7.5
console.log(calcular(5, 10, 0)); // null

// // ??