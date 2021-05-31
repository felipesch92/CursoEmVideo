var img = document.getElementById("imagem")
var h2_hora = document.getElementById("h2_hora")
var data = new Date()
var hora = data.getHours()
if (hora > 18 || hora < 7){
    img.src = "img/noite.jpg"
   h2_hora.innerHTML = `Agora são ${hora} horas`
   document.body.style.backgroundColor = "#5D577C" 
} else if( hora > 12){
    img.src = "img/tarde.jpg"
    h2_hora.innerHTML = `Agora são ${hora} horas`   
    document.body.style.backgroundColor = "#6E9DFA"
} else if( hora > 6 ){
    img.src = "img/manha.jpg"
    h2_hora.innerHTML = `Agora são ${hora} horas`
    document.body.style.backgroundColor = "#B3FFBB"
}