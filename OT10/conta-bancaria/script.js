
class ContaBancaria {

    constructor(titular, saldoInicial = 0) {
        if (typeof titular !== 'string' || titular.trim() === '') {
            throw new Error("O nome do titular é obrigatório.");
        }
        if (saldoInicial < 0) {
            throw new Error("O saldo inicial não pode ser negativo.");
        }

        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
        } else {
            console.error("Valor de depósito inválido. Por favor, insira um número positivo.");
        }
    }


    sacar(valor) {
        if (valor <= 0) {
            console.error("Valor de saque inválido. Por favor, insira um número positivo.");
            return; 
        }

        if (valor > this.saldo) {
            console.error(`Tentativa de saque de R$ ${valor.toFixed(2)} recusada. Saldo insuficiente.`);
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo restante: R$ ${this.saldo.toFixed(2)}`);
        }
    }

    consultarSaldo() {
        return `O saldo atual da conta de ${this.titular} é R$ ${this.saldo.toFixed(2)}`;
    }
}



console.log("--- Criando a conta para Maria ---");
const contaDaMaria = new ContaBancaria('Maria Souza', 1000);
console.log(contaDaMaria.consultarSaldo()); 

console.log("\n--- Realizando operações ---");
contaDaMaria.depositar(250);   
contaDaMaria.sacar(300);       

console.log("\n--- Tentando sacar um valor maior que o saldo ---");
contaDaMaria.sacar(1500);      
console.log(contaDaMaria.consultarSaldo());

console.log("\n--- Tentando sacar um valor inválido ---");
contaDaMaria.sacar(-100);  

console.log("\n--- Esvaziando a conta ---");
contaDaMaria.sacar(950); 
console.log(contaDaMaria.consultarSaldo());