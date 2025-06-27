

class Utilitario {
    static converteCelsiusParaFahrenheit(celsius) {

        if (typeof celsius !== 'number') {
            throw new Error('O valor deve ser um número');
        }
        return (celsius * 9/5) + 32;
    }
}

function converterValoresAleatorios(quantidade) {
    for (let i = 0; i < quantidade; i++) {
        const valorAleatorio = Math.floor(Math.random() * 101) - 50; 
        const fahrenheit = Utilitario.converteCelsiusParaFahrenheit(valorAleatorio);
        console.log(`Celsius: ${valorAleatorio}, Fahrenheit: ${fahrenheit}`);
    }
}

converterValoresAleatorios(10);