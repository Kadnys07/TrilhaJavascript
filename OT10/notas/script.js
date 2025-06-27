
let nota = [];
let media;
let total = 0;


for (let i = 0; i < 10; i++) {
    let notaGerada = parseFloat((Math.random() * 10).toFixed(1));
    nota[i] = notaGerada; 
    
    total += nota[i]; 
}

media = total / nota.length;


console.log(`Notas: ${nota.join(', ')}`);
console.log(`Total: ${total.toFixed(2)}`); 
console.log(`Média: ${media.toFixed(2)}`);