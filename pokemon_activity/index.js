document.getElementById("water").addEventListener("mouseover", waterHover)
document.getElementById("water").addEventListener("mouseout", HoverOut)
document.getElementById("water").addEventListener("click", waterClick)
document.getElementById("fire").addEventListener("mouseover", fireHover)
document.getElementById("fire").addEventListener("mouseout", HoverOut)
document.getElementById("fire").addEventListener("click", fireClick)
document.getElementById("grass").addEventListener("mouseover", grassHover)
document.getElementById("grass").addEventListener("mouseout", HoverOut)
document.getElementById("grass").addEventListener("click", grassClick)

function waterHover(){
    document.getElementsByClassName("top_words")[0].innerHTML = "THIS IS THE WATER TYPE"
}
function HoverOut(){
    document.getElementsByClassName("top_words")[0].innerHTML = "CHOSE YOUR POKEMON!!"
}
function fireHover(){
    document.getElementsByClassName("top_words")[0].innerHTML = "THIS IS THE FIRE TYPE"
}
function grassHover(){
    document.getElementsByClassName("top_words")[0].innerHTML = "THIS IS THE GRASS TYPE"
}
function waterClick(){
    document.getElementById("water").src = "https://p.kindpng.com/picc/s/0-7561_pokemon-squirtle-hd-png-download.png"
    document.getElementById("water").removeEventListener("mouseover", waterHover)
    document.getElementById("water").removeEventListener("mouseout", HoverOut)
    document.getElementById("fire").removeEventListener("mouseover", fireHover)
    document.getElementById("fire").removeEventListener("mouseout", HoverOut)
    document.getElementById("fire").removeEventListener("click", fireClick)
    document.getElementById("grass").removeEventListener("mouseover", grassHover)
    document.getElementById("grass").removeEventListener("mouseout", HoverOut)
    document.getElementById("grass").removeEventListener("click", grassClick)
    document.getElementsByClassName("top_words")[0].innerHTML = "YOU GOT A SQUIRTLE"
}
function fireClick(){
    document.getElementById("fire").src = "https://i.pinimg.com/originals/e2/23/1c/e2231c4f90fae48e85d9ff78dd768ee0.png"
    document.getElementById("water").removeEventListener("mouseover", waterHover)
    document.getElementById("water").removeEventListener("mouseout", HoverOut)
    document.getElementById("water").removeEventListener("click", waterClick)
    document.getElementById("fire").removeEventListener("mouseover", fireHover)
    document.getElementById("fire").removeEventListener("mouseout", HoverOut)
    document.getElementById("grass").removeEventListener("mouseover", grassHover)
    document.getElementById("grass").removeEventListener("mouseout", HoverOut)
    document.getElementById("grass").removeEventListener("click", grassClick)
    document.getElementsByClassName("top_words")[0].innerHTML = "YOU GOT A CHARMANDER"
}
function grassClick(){
    document.getElementById("grass").src = "http://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png"
    document.getElementById("water").removeEventListener("mouseover", waterHover)
    document.getElementById("water").removeEventListener("mouseout", HoverOut)
    document.getElementById("water").removeEventListener("click", waterClick)
    document.getElementById("fire").removeEventListener("mouseover", fireHover)
    document.getElementById("fire").removeEventListener("mouseout", HoverOut)
    document.getElementById("fire").removeEventListener("click", fireClick)
    document.getElementById("grass").removeEventListener("mouseover", grassHover)
    document.getElementById("grass").removeEventListener("mouseout", HoverOut)
    document.getElementsByClassName("top_words")[0].innerHTML = "YOU GOT A BULBASAUR"
}