var pedacos = 8

function temFatia(){
    if (pedacos != 0){
        return true
    } else {
        console.log("Acabou a pizza!")
    }
}

function comerFatia(){
    pedacos -= 1
    console.log(`Agora restam ${pedacos} fatias de pizza.`)
}

function comerPizza(){
    console.log(`Vamos comer essa pizza que contém ${pedacos} fatias!`)
    while ( temFatia() ){
        comerFatia()
    }
}

comerPizza()