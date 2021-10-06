function contar(){
    inicio = Number(document.querySelector("input[id='inicio']").value)
    fim = Number(document.querySelector("input[id='fim']").value)
    pulo = Number(document.querySelector("input[id='pulo']").value)
    resultado = document.querySelector("div[id='resultado']")
    resultado.innerHTML = ''
    for (x = inicio; x <= fim; x += pulo){
        resultado.innerHTML += `${x}.. `
    }
}