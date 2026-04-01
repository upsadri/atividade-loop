const prompt = require('prompt-sync')();
let nome = []
let lista = 0
while(lista < 3){
    let nomes = prompt ("digite seu nome")
    nome.push(nomes)
    lista++
}
let notas = []
let lista2= 0
while (lista2 <3 ){
    let nota = Number( prompt ("digite sua nota"))
    notas.push(nota)
    lista2++
}
console.log ("nomes", nome)
console.log ("nota", notas)
if ( notas [0] >=7){
    console.log("aprovado");
}
else{
    console.log("reprovado");
}
if ( notas [1] >=7){
    console.log("aprovado");
}
else{
    console.log("reprovado");
}
if ( notas [2] >=7){
    console.log("aprovado");
}
else{
    console.log("reprovado");
}