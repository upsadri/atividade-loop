let estoque = [10,20,7,0,2,20]
let semestoque = 0
let estoquebaixo = 0
let reposicao = 0

for (let i = 0; i < estoque.length; i++) {
    if (estoque [i] == 0){
        semestoque++
        reposicao++
    }
    if (estoque[i]> 0 && estoque[i]<5){
        estoquebaixo++
        reposicao++
    }
}
console.log ("PRODUTOS SEM ESTOQUE", semestoque)
console.log ("estoques", estoque)
console.log ("atenção estoque baixo", estoquebaixo)
console.log ("precisa repor", reposicao)