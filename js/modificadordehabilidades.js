function modificadorHabilidades () {


let valorForca = document.getElementById("valorPontosFor").value;
let modForca = Math.floor((valorForca-10)/2);
let resultadoModForca = document.getElementById("modFor").innerText = modForca

let valorDestreza = document.getElementById("valorPontosDes").value;
let modDestreza = Math.floor((valorDestreza-10)/2);
let resultadoModDestreza = document.getElementById("modDes").innerText = modDestreza

let valorConstituicao = document.getElementById("valorPontosCon").value;
let modConstituicao = Math.floor((valorConstituicao-10)/2);
let resultadoModConstituicao = document.getElementById("modCon").innerText = modConstituicao

let valorInteligencia = document.getElementById("valorPontosInt").value;
let modInteligencia = Math.floor((valorInteligencia-10)/2);
let resultadoModInteligencia = document.getElementById("modInt").innerText = modInteligencia

let valorSabedoria = document.getElementById("valorPontosSab").value;
let modSabedoria = Math.floor((valorSabedoria-10)/2);
let resultadoModSabedoria = document.getElementById("modSab").innerText = modSabedoria

let valorCarisma = document.getElementById("valorPontosCar").value;
let modCarisma = Math.floor((valorCarisma-10)/2);
let resultadoModCarisma = document.getElementById("modCar").innerText = modCarisma

}