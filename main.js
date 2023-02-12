let instrucoes = document.getElementById("instrucoes");
let nomeJogador = document.getElementById("input-nome");
let iniciar = document.getElementById("submit-nome");
let jogo = document.getElementById("jogo");
let pronto = document.getElementById("p-pronto");
let partidas = document.getElementsByName("partidas");
let tentativa = document.getElementById("objEscolhido");
let buttonPedra = document.getElementById("button-pedra");
let buttonPapel = document.getElementById("button-papel");
let buttonTesoura = document.getElementById("button-tesoura");
let painel = document.getElementById("p-painel");
let mostraPartidas = document.getElementById("p-partidas");
let mostraPontosJogador = document.getElementById("p-pontosJogador");
let mostraPontosComputador = document.getElementById("p-pontosComputador");
let revanche = document.getElementById("submit-revanche");
let desistir = document.getElementById("submit-desistir");
let fim = document.getElementById("fim");
let final = document.getElementById("p-final");
let objEscolhido = "";
let qtePartidas = 0;
let pontosJogador = 0;
let pontosComputador = 0;
let numPartidas = 0;




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
    for (var i = 0 in partidas) {
        if (partidas[i].checked) {
            numPartidas = partidas[i].value;
        }
    }
    if (pontosJogador == (numPartidas - parseInt(numPartidas / 2))) {
        infoPainel('Você ganhou o jogo!');
        tentativa.hidden = true;
        revanche.hidden = false;
        desistir.hidden = false;

    } else if (pontosComputador == (numPartidas - parseInt(numPartidas / 2))) {
        infoPainel('Você perdeu o jogo!');
        tentativa.hidden = true;
        revanche.hidden = false;
        desistir.hidden = false;
    }
}

function objPedra() {
    objEscolhido = "pedra";
    compara();
}

function objPapel() {
    objEscolhido = "papel";
    compara();
}

function objTesoura() {
    objEscolhido = "tesoura";
    compara();
}

function compara() {
    let objetos = ['pedra', 'papel', 'tesoura'];
    let objSorteado = objetos[sorteia(0, 2)];
    if (objEscolhido === objSorteado) {
        infoPainel(`Empatou!
                    O computador jogou ${objSorteado}.`);
        qtePartidas++
        mostraPartidas.innerText = `Partidas: ${qtePartidas}`

    } else if (objEscolhido == 'pedra' && objSorteado == 'tesoura' ||
        objEscolhido == 'papel' && objSorteado == 'pedra' ||
        objEscolhido == 'tesoura' && objSorteado == 'papel') {
        infoPainel(`Você ganhou!
                    O computador jogou ${objSorteado}.`);
        qtePartidas++
        pontosJogador++
        mostraPontosJogador.innerText = `Pontos do Jogador: ${pontosJogador}`;
        mostraPartidas.innerText = `Partidas: ${qtePartidas}`
        partida();

    } else if (objEscolhido == 'pedra' && objSorteado == 'papel' ||
        objEscolhido == 'papel' && objSorteado == 'tesoura' ||
        objEscolhido == 'tesoura' && objSorteado == 'pedra') {
        infoPainel(`Você perdeu!
                    O computador jogou ${objSorteado}.`);
        qtePartidas++
        pontosComputador++
        mostraPontosComputador.innerText = `Pontos do Computador: ${pontosComputador}`;
        mostraPartidas.innerText = `Partidas: ${qtePartidas}`
        partida();
    }
}

function infoPainel(frase) {
    painel.innerText = frase;
}

function reinicio() {
    qtePartidas = 0;
    pontosJogador = 0;
    pontosComputador = 0;
    numPartidas.value = "";
    objEscolhido = "";
    tentativa.hidden = false;
    revanche.hidden = true;
    desistir.hidden = true;
    mostraPartidas.innerText = `Partidas: ${qtePartidas}`
    mostraPontosJogador.innerText = `Pontos do Jogador: ${pontosJogador}`;
    mostraPontosComputador.innerText = `Pontos do Computador: ${pontosComputador}`;
}

function desiste() {
    jogo.hidden = true;
    fim.hidden = false;
    final.innerText = `${nomeJogador.value} obrigado por jogar!
                        Até a próxima!`
}

iniciar.onclick = inicio;
revanche.onclick = reinicio;
desistir.onclick = desiste;

buttonPedra.onclick = objPedra;
buttonPapel.onclick = objPapel;
buttonTesoura.onclick = objTesoura;