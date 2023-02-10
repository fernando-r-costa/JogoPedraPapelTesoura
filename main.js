let instrucoes = document.getElementById("intrucoes");
let jogo = document.getElementById("jogo");
let nomeJogador = document.getElementById("input-nome");
let iniciar = document.getElementById("submit-nome");
let pronto = document.getElementById("p-pronto");
let numPartidas = document.getElementById("input-partidas");
let objEscolhido = document.getElementById("input-objetoEscolhido");
let tentativa = document.getElementById("submit-tentativa");
let painel = document.getElementById("p-painel");
let mostraPontosJogador = document.getElementById("p-pontosJogador");
let mostraPontosComputador = document.getElementById("p-pontosComputador");
let revanche = document.getElementById("submit-revanche");
let desistir = document.getElementById("submit-desistir");
let pontosJogador = 0;
let pontosComputador = 0;

function inicio() {
    instrucoes.hidden = true;
    jogo.hidden = false;
    pronto.innerText = `Boa Sorte, ${nomeJogador.value}!!!`;
}

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function partida() {
    if (pontosJogador == (numPartidas.value - parseInt(numPartidas.value / 2))) {
        infoPainel('Você ganhou o jogo!');
        tentativa.hidden = true;
        revanche.hidden = false;
        desistir.hidden = false;
        
    } else if (pontosComputador == (numPartidas.value - parseInt(numPartidas.value / 2))) {
        infoPainel('Você perdeu o jogo!');
        tentativa.hidden = true;
        revanche.hidden = false;
        desistir.hidden = false;
    } 
    
}

function compara() {
    let objetos = ['pedra', 'papel', 'tesoura'];
    let objSorteado = objetos[sorteia(0, 2)];
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

function infoPainel(frase) {
    painel.innerText = frase;
}

function reinicio() {
    window.location.reload();
}

function fim() {
    document.write("Obrigado por jogar! Até a próxima!")
}

iniciar.onclick = inicio;
tentativa.onclick = compara;
revanche.onclick = reinicio;
desistir.onclick = fim;
