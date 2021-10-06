function gerar(){
    inicio = Number(document.querySelector("input[id='inicio']").value)
    fim = Number(document.querySelector("input[id='fim']").value)
    pulo = Number(document.querySelector("input[id='pulo']").value)
    resultado = document.querySelector("div[id='resultado']")
    while( inicio <= fim ){
        resultado.innerHTML += `${inicio}... `
        inicio += pulo
    }
    //resultado.innerHTML = inicio
}