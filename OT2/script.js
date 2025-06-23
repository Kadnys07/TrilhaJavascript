let animais = ["Cachorro", "Gato", "Coelho"];
let frutas = ["Maçã", "Banana", "Laranja"];

animais.push("Rato");

console.log(animais.join(", "));

animais.shift();
console.log(animais.join(", "));

animais.unshift("Peixe","Cavalo");
console.log(animais.join(", "));


for (let i = 0; i < animais.length; i++) {

   if (i === 1) {
    animais[i]= "Girafa"; 
   }
}
console.log(animais.join(", "));

for (let i = 0; i < frutas.length; i++) {
   console.log("Fruta " + (i + 1) + ": " + frutas[i]);
}
