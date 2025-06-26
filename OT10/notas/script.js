let nota = [] 
let media = 0
let total = 0;

for (let i = 0; i < 10; i++) {
    nota[i] = (Math.random() * 10).toFixed(2);
    total += nota[i];
}
media = total / nota.length;
console.log(`Notas: ${nota}`);
console.log(`Média: ${media}`);