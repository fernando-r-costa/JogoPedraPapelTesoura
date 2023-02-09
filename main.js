// let nomeJogador = prompt("INFORME O SEU NOME?");
// const bemVindo = document.getElementById("bemvindo").innerText = `Seja bem vindo, ${nomeJogador}!`;

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let numPartidas = document.getElementById("input-partidas");
let objEscolhido = document.getElementById("input-objetoEscolhido");
let tentativa = document.getElementById("submit-tentativa");
let mostraPontosJogador = document.getElementById("p-pontosJogador")
let mostraPontosComputador = document.getElementById("p-pontosComputador")
let painel = document.getElementById("p-painel");

function infoPainel(frase) {
    painel.innerText = frase;
}


let pontosJogador = 0;
let pontosComputador = 0;

function partida() {
    if (pontosJogador == (numPartidas.value - parseInt(numPartidas.value / 2))) {
        infoPainel('Você ganhou o jogo!');
        tentativa.hidden = true;
        
    } else if (pontosComputador == (numPartidas.value - parseInt(numPartidas.value / 2))) {
        infoPainel('Você perdeu o jogo!');
        tentativa.hidden = true;
    } 
    
}

function compara() {
    let objetos = ['pedra', 'papel', 'tesoura'];
    let objSorteado = objetos[sorteia(0, 2)];
    console.log(objSorteado);
    if (objEscolhido.value === objSorteado) {
        infoPainel(`Empate, ${objSorteado}`);
        objEscolhido.focus();

    } else if (objEscolhido.value == 'pedra' && objSorteado == 'tesoura' ||
        objEscolhido.value == 'papel' && objSorteado == 'pedra' ||
        objEscolhido.value == 'tesoura' && objSorteado == 'papel') {
        infoPainel(`Você ganhou! ${objSorteado}`);
        pontosJogador++
        mostraPontosJogador.innerText = `Pontos do Jogador: ${pontosJogador}`;
        objEscolhido.focus();
        partida();

    } else if (objEscolhido.value == 'pedra' && objSorteado == 'papel' ||
        objEscolhido.value == 'papel' && objSorteado == 'tesoura' ||
        objEscolhido.value == 'tesoura' && objSorteado == 'pedra') {
        infoPainel(`Você perdeu! ${objSorteado}`);
        pontosComputador++
        mostraPontosComputador.innerText = `Pontos do Computador: ${pontosComputador}`;
        objEscolhido.focus();
        partida();
    }
}


tentativa.onclick = compara;
// reiniciar.onclick = reinicio;