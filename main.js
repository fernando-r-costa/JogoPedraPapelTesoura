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
let objEscolhido = document.getElementById("input-objetoEscolhido");
const tentativa = document.getElementById("submit-tentativa");
objEscolhido.focus();

function compara() {
    if (objEscolhido.value === objSorteado) {
        console.log("empate");
        objEscolhido.focus();

    } else if (objEscolhido.value == 'pedra' && objSorteado == 'tesoura' ||
            objEscolhido.value == 'papel' && objSorteado == 'pedra' ||
            objEscolhido.value == 'tesoura' && objSorteado == 'papel') {
        console.log('Você ganhou!');
        objEscolhido.focus();

    } else if (objEscolhido.value == 'pedra' && objSorteado == 'papel' ||
            objEscolhido.value == 'papel' && objSorteado == 'tesoura' ||
            objEscolhido.value == 'tesoura' && objSorteado == 'pedra') {
        console.log('Você perdeu!');
        objEscolhido.focus();
    }
}

tentativa.onclick = compara;
// reiniciar.onclick = reinicio;