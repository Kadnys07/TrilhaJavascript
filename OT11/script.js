let destinatario = " Joao da Silva ";
let evento = " Aniversário ";
let dataEvento = " 2025-10-25 ";
let mensagem = ("Olá, "+destinatario +" Você foi convidado para o "+evento+ " do Kadnys!" + "A festa será no dia" + dataEvento + " e esperamos você lá!");
console.log(mensagem);

// Diario de bordo: //

let data = "2023-10-25";
let hora = "10:00";
let local = "Navio Pirata";
let diario = `Data: ${data}\nHora: ${hora}\nLocal: ${local}\n\nHoje, navegamos pelos mares do Caribe, enfrentando tempestades e descobrindo tesouros escondidos. A tripulação está animada para a próxima aventura!`;
console.log(diario);

// Comunicado (Replace)//

let comunicado = "Atenção, tripulação! A partir de amanhã, todos devem comparecer ao convés às 08:00 para o treinamento de combate.";
comunicado = comunicado.replace("08:00", "09:00");
console.log(comunicado);

// Caixa de comenterio (().trim//

let comentario = "    Este é um comentário importante.      ";
comentario = comentario.trim(); 
console.log(comentario);

// Carta para um amigo (Template Literals)
const carta = "Olá, meu querido amigo,\nEstou a aprender JavaScript e queria partilhar isto contigo. É fascinante como podemos manipular texto e criar formatos diferentes com apenas alguns comandos! \nUm grande abraço,\nSeu Amigo Programador";
console.log(carta);



// Citação famosa(escape characters)
let citacao = "Albert Einstein disse: \"A imaginação é mais importante que o conhecimento.\"";
console.log(citacao);