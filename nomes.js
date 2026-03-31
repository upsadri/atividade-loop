const prompt = require('prompt-sync')();
let nomes = []
for (let i = 0; i <5; i++){
    let nome = prompt ("digite seu nome")
    nomes.push(nome)
}
let resultado = "nomes cadastrado"
for (let i = 0; i < nomes.length; i++){
    resultado += nomes [i]
}