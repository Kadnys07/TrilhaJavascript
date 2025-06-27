
class Jogo {
    
    static adivinharNumero(palpiteDoUsuario, maximo = 10) {
        if (isNaN(palpiteDoUsuario) || palpiteDoUsuario < 1 || palpiteDoUsuario > maximo) {
            return `Por favor, insira um palpite válido (número entre 1 e ${maximo}).`;
        }

        const numeroSecreto = Math.floor(Math.random() * maximo) + 1;

        if (palpiteDoUsuario === numeroSecreto) {
            return `🎉 Parabéns! Você acertou! O número era ${numeroSecreto}.`;
        } else {
            return `❌ Que pena, você errou. O número correto era ${numeroSecreto}. Tente novamente!`;
        }
    }
}


const inputDoPalpite = document.getElementById('palpiteInput');
const botaoAdivinhar = document.getElementById('adivinharBtn');
const elementoResultado = document.getElementById('resultado');


botaoAdivinhar.addEventListener('click', () => {
    
    const palpite = parseInt(inputDoPalpite.value, 10);
    const mensagemResultado = Jogo.adivinharNumero(palpite);
    elementoResultado.textContent = mensagemResultado;
});