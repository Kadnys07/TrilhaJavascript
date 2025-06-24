let idadePessoa = [];

for (let i = 0; i < 10; i++) { 
    
   let idade = (Math.floor(Math.random() * 100));
    idadePessoa.push(idade);

    switch (true) {
        case (idade < 18):
            console.log(`A pessoa ${i + 1} é uma criança com ${idade} anos.`);
            break;
        case (idade >= 18 && idade < 60):
            console.log(`A pessoa ${i + 1} é um adulto com ${idade} anos.`);
            break;
        default:
            console.log(`A pessoa ${i + 1} é idosa com ${idade} anos.`);
    }
}
