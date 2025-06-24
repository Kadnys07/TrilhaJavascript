let nota = (Math.random() * 10).toFixed(2);

switch (true) {
    case (nota >= 7.0 ):
        console.log(`Aprovado com nota ${nota}`);
        break;
    case (nota >= 6.0 && nota < 7.0):
        console.log(`Recuperação com nota ${nota}`);
        break;
    case (nota < 6.0):
        console.log(`Reprovado com nota ${nota}`);
        break;

}
