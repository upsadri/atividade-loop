let vendas= [100, 150,400, 90, 600, 300, 200]
let totalvendido = 0
let maior100 = 0
let maiorvalor = 0

for (let i= 0 ; i< vendas.length; i++){
 totalvendido += vendas [i]
}

let media = vendas/ vendas.length

 for (let i= 0 ; i< vendas.length; i++){
 if (vendas [i] >100)
    maior100++
}
//vendas maiores

for (let i= 1 ; i< vendas.length; i++){
if (vendas [i]> maiorvalor)
    maiorvalor = vendas [i]
}
console.log ("total vendido", totalvendido)
console.log ("maior que 100", maior100)
console.log ("maior valor", maiorvalor)