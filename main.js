// let nomeJogador = prompt("INFORME O SEU NOME?");
// const bemVindo = document.getElementById("bemvindo").innerText = `Seja bem vindo, ${nomeJogador}!`;

function sorteia(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let objetos = ['pedra', 'papel', 'tesoura'];
console.log(objetos[sorteia(0,2)]);