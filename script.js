const exibirResultado = document.querySelector('.result');
const yourScore = document.querySelector('.your-score');
const machineScore = document.querySelector('.machine-score');

let countJogador = 0
let countMaquina = 0

function cliqueUser(el) {
    resultadoJogo(el, respostaAlexa())
}


function respostaAlexa() {

    const escolhaAlexa = ["pedra", "papel", "tesoura"]
    const res = Math.floor(Math.random() * 3)
    return escolhaAlexa[res]
}


function resultadoJogo(jogador, maquina) {

    if (jogador === maquina) {
        exibirResultado.innerHTML = "Deu Empate"
        exibirResultado.style.color = "black"

    } else if (
        (jogador === "pedra" && maquina === "tesoura") ||
        (jogador === "tesoura" && maquina === "papel") ||
        (jogador === "papel" && maquina === "pedra") 
    ) {
        countJogador++
        yourScore.innerHTML = countJogador
        exibirResultado.innerHTML = "Você Ganhou"
        exibirResultado.style.color = "green"
    }else{
        countMaquina++
        machineScore.innerHTML = countMaquina
        exibirResultado.innerHTML = "Você Perdeu"
        exibirResultado.style.color = "red"
    }
}

