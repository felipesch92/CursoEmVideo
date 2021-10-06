function gerar(){
    numero = Number(document.querySelector("input[id='numero']").value)
    seltab = document.getElementById("seltab")
    //resultado = document.querySelector("div[id='resultado']")
    //resultado.innerHTML = ''
    seltab.innerHTML = ''
    for(x = 1; x <= 10; x++){
        res = numero * x
        let item = document.createElement('option')
        item.text = `${numero} x ${x} = ${res}`
        seltab.appendChild(item)
        //resultado.innerHTML += `${numero} x ${x} = ${res} <br />`
    }
}