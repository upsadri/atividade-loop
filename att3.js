const prompt = require('prompt-sync')();
let inter1 = 0, inter2 =0, inter3 =0, inter4 = 0
while(true){
    let num = parseInt(prompt("digite um numero", ("digite para sair")))
    if (num <0){
        break
    }
    if(num <= 25){
    inter1++
} else if (num <= 50){
    inter2++
} else if (num <= 75){
    inter3++
}else if (num <= 100){
    inter4++
}
}

console.log ("inteiro 1- qtd", inter1)
console.log ("inteiro 2- qtd", inter2)
console.log ("inteiro 3- qtd", inter3)
console.log ("inteiro 4- qtd", inter4)