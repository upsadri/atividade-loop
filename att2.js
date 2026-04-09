const prompt = require('prompt-sync')();
let soma= 0
for(let i= 0; i<10; i++){
    let numero = parseInt(prompt("digite seu numero"))
    if(numero >0 ){
        soma = soma+ numero
    }
}
console.log ("somas dos positivos", soma)