let num = [1, 5, 10, 20]
console.log(`Nossos números são ${num}`)
num.push(50)
console.log(`Nossos números são ${num}`)
console.log(num.length)
for(let pos in num){
    console.log(`Número na posição ${pos} = ${num[pos]}`)
}
// Para buscar em qual posição está o dado dentro do vetor:
console.log(num.indexOf(100))