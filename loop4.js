let temperaturas = [30, 28, 32, 25, 27, 83, 29]
let maior90 = 0
let contador = 0
let soma = 0

for (let i = 0; i < temperaturas.length; i++) {
    soma += temperaturas [i]


     if (temperaturas [i]> 80){
        contador++
     }

    if (temperaturas [i] >90){
      console.log ("alerta critica")
    }
}
 let media= soma/temperaturas.length
 console.log ("media total", media)
console.log ("vezes que passou de 80 ", contador)