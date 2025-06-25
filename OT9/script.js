let frutas = new Set();
frutas.add("maçã");
frutas.add("banana");
frutas.add("laranja");
frutas.add("maçã"); // Não será adicionado novamente   

console.log(frutas.has("banana"));
console.log(frutas.delete("laranja"));
console.log(frutas.size);
frutas.clear();
console.log(frutas.size);

let frutas2 = new Set(["uva", "kiwi", "abacaxi", "manga", "pera"]);

console.log(frutas2.size);

for (let fruta of frutas2) {
    console.log(fruta);
}

let frutasArray = ["morango", "cereja", "melancia", "abacate", "mamão","morango", "cereja", "melancia", "abacate", "mamão"];
let frutas3 = new Set(frutasArray);
for (let fruta of frutasArray) {
    frutas2.add(fruta);
}
console.log(frutas3)