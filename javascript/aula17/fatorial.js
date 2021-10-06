function fat(n){
    let tot = 1
    for(x = n; x > 1; x--){
        tot *= x
    }
    return tot
}

function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fat(3))
console.log(fatorial(5))