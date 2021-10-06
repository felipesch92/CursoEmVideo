function parimp(n){
    if (n % 2 == 0){
        return `Número ${n} é Par!`
    }else{
        return `Número ${n} é Impar!`
    }
}

console.log(parimp(3))
console.log(parimp(4))