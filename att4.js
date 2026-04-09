let i= 11, somamultiplos6 = 0, qtndmultiplos6 = 0
while(i <=210){
    if(i % 6 === 0){
        console.log(i, " ")
        somamultiplos6 = somamultiplos6 +i
        qtndmultiplos6++
    }
    i++
}
console.log("media", somamultiplos6/qtndmultiplos6)
