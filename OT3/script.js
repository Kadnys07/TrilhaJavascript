
let numero = [];
let num2 = [];
let num3 = [];
let num4 = [];
let num5 = [];
let nomes = ['João', 'Maria', 'José', 'Ana', 'Pedro', 'Lucas', 'Paula', 'Fernanda', 'Carlos', 'Roberto'];

for (let i = 0 ; numero.length <= 10 ; i++) {
    numero.push(numero.length);
}

console.log(numero);

for (let i = 0 ; i <= 20; i++) {
    num2.push(i);
    if (num2[i] % 2 === 1) {
        console.log(num2[i]);
    } 
}

while(num3.length <= 10) {
        num3.push(num3.length);  
}
console.log(num3);

for (let i = 0; i <= 100; i++) {

    num4.push(i);
    if (i == 50){
        break;
    }
}
console.log(num4);

for (let i = 0; i <= 20; i++) { 
    num5.push(i);
    if ( i == 13) {
    num5[i] = '';
    }
    
}
console.log(num5);

for (let i = 0; i < nomes.length; i++) {
    
        console.log(i+ " = " + nomes[i]);
    }