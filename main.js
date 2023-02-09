// let nomeJogador = prompt("INFORME O SEU NOME?");
// const bemVindo = document.getElementById("bemvindo").innerText = `Seja bem vindo, ${nomeJogador}!`;

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let objetos = ['pedra', 'papel', 'tesoura'];
let objSorteado = objetos[sorteia(0, 2)];
console.log(objSorteado);

let numPartidas = document.getElementById("input-partidas");
let objEscolhido = document.getElementById("input-objetoEscolhido");
let tentativa = document.getElementById("submit-tentativa");

let painel = document.getElementById("p-painel");
function infoPainel(frase) {
    painel.innerText = frase;
}

let pontosJogador = 0;
let pontosComputador = 0;
let mostraPontosJogador = document.getElementById("p-pontosJogador")
let mostraPontosComputador = document.getElementById("p-pontosComputador")

function compara() {
    if (objEscolhido.value === objSorteado) {
        infoPainel("Empate");
        objEscolhido.focus();

    } else if (objEscolhido.value == 'pedra' && objSorteado == 'tesoura' ||
            objEscolhido.value == 'papel' && objSorteado == 'pedra' ||
            objEscolhido.value == 'tesoura' && objSorteado == 'papel') {
        infoPainel('Você ganhou!');
        pontosJogador++
        mostraPontosJogador.innerText = `Pontos do Jogador: ${pontosJogador}`;
        objEscolhido.focus();

    } else if (objEscolhido.value == 'pedra' && objSorteado == 'papel' ||
            objEscolhido.value == 'papel' && objSorteado == 'tesoura' ||
            objEscolhido.value == 'tesoura' && objSorteado == 'pedra') {
        infoPainel('Você perdeu!');
        pontosComputador++
        mostraPontosComputador.innerText = `Pontos do Computador: ${pontosComputador}`;
        objEscolhido.focus();
    }
}

tentativa.onclick = compara;
// reiniciar.onclick = reinicio;