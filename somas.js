const prompt = require('prompt-sync')();
let numeros = []
let soma = 0
for (let i = 0; i <5; i++){
    let numero = prompt ("degite seu numero")
    numeros.push(numero)
    soma += Number (numero)
}
console.log ("numeros", numeros)
console.log ("soma", soma)