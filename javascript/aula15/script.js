function verifica() {
    var ano_nasc = document.querySelector('input[id="ano_nasc"]').value
    var resultado = document.querySelector('div[id="resultado"]')
    var sexo = document.querySelector('input[id="sexo"]:checked').value
    //var img_sexo = document.querySelector('img[id="img_sexo"]')
    var img_sexo = document.createElement("img_sexo")
    img_sexo.setAttribute('id', 'img_sexo')
    var data_atual = new Date()
    var idade = data_atual.getFullYear() - ano_nasc
    if ( sexo == 1){
        sexo = "masculino"
        img_sexo.setAttribute('src', 'img/homem.jpg')
        //img_sexo.src = "img/homem.jpg"
    } else{
        sexo = "feminino"
        img_sexo.setAttribute("src", "img/mulher.jpg")
        //img_sexo.src = "img/mulher.jpg"
    }
    resultado.appendChild(img_sexo)
    resultado.innerHTML += `<br />Você possui ${idade} anos, e é do sexo ${sexo}!`  
    resultado.style.display = "block"
}