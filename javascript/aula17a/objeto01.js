amigo = {nome: "Felipe", 
sexo: "M",
peso: 85,
idade: 29,
engordar(p){
    console.log("engorgou")
    this.peso += p
}
}
console.log(typeof amigo)
console.log(amigo)
amigo.engordar(2)
console.log(amigo)