let v_num = []
function estaNoVetor(valor, vetor){
    return vetor.indexOf(valor)
}
function adiciona(){
    let txt_num = document.getElementById("txt_num").value
    let sel_numeros = document.getElementById("sel_numeros")
    let op_num = document.createElement("option")
    
    if (txt_num != ""){
        if (v_num.indexOf(txt_num) > -1){
            alert("Valor já foi adicionado!")
        } else {
            if (txt_num > 100 || txt_num < 1){
                alert("O número deve ser entre 1 e 100!")
            } else {
                v_num.push(txt_num)
                op_num.text = v_num[v_num.length - 1]
                sel_numeros.add(op_num)
            }
        }
    } else {
        alert("Digite um número!")
    }
    document.getElementById("txt_num").value = ""
    document.getElementById("resultado").innerHTML = ""
}

function finaliza(){
    // MAIOR, MENOR, SOMA E MÉDIA
    let div_res = document.getElementById("resultado")
    maximo = Math.max.apply(null, v_num)
    minimo = Math.min.apply(null, v_num)
    soma = 0
    for(x = 0; x < v_num.length; x++){
        soma += Number(v_num[x])
    }
    media = Math.round(soma / v_num.length)
    div_res.innerHTML += `<p>Ao todo temos ${v_num.length} números cadastrados.</p>`
    div_res.innerHTML += `<p>O maior número adicionado foi o ${maximo}</p>`
    div_res.innerHTML += `<p>O menor número adicionado foi o ${minimo}</p>`
    div_res.innerHTML += `<p>A soma dos valores é igual a: ${soma}</p>`
    div_res.innerHTML += `<p>A média dos valores é igual a: ${media}</p>`
    div_res.style.display = "grid"
}