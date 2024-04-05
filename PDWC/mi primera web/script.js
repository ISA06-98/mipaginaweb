//alert("Hola este es mi Javascript");

//let nombre = "Marta";
// nombre = "Maria"

// var nombre1 = "Marta";

// const nombre2 ="Marta";
// //nombre2 = "Maria";

// console.log (nombre);
// console.log (nombre1);
// console.log (nombre2);

//SELECCIONAR ELEMENTOS

let contenidoTitulo = "Nombre";
let titulo = document.querySelector(".icon");
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre") {
    titulo.innerText = "Isabel";
} else {
    console.log ("no se cumple");
}

//FUNCIONES
let nombre = "Ani";
let ciudad = "Bs As";
let gusto = "chocolate"; 

let parrafo = document.querySelector(".parrafo-2");

function cambiarTexto(nombre, ciudad, gusto){
    let contenido = `Me llamo ${nombre},nací en ${ciudad} y vivo enCaballito. Me gusta el ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que HashChangeEvent.}`; 
    return contenido;
} 

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);





