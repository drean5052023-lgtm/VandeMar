document.addEventListener("DOMContentLoaded", () => {

    const boton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    boton.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

});

document.addEventListener("click",(e)=>{

    if(
        !menu.contains(e.target) &&
        !boton.contains(e.target)
    ){

        menu.classList.remove("activo");

    }

});

const slides=document.querySelector(".slides");

const imagenes=document.querySelectorAll(".slides img");

const siguiente=document.querySelector(".next");

const anterior=document.querySelector(".prev");
let indice=0;
function mostrar(){

    slides.style.transform=`translateX(-${indice*100}%)`;

}
siguiente.addEventListener("click",()=>{

    indice++;

    if(indice>=imagenes.length){

        indice=0;

    }

    mostrar();

});
anterior.addEventListener("click",()=>{

    indice--;

    if(indice<0){

        indice=imagenes.length-1;

    }

    mostrar();

});
setInterval(()=>{

    indice++;

    if(indice>=imagenes.length){

        indice=0;

    }

    mostrar();

},4000);
let intervalo;
function iniciar(){

    intervalo=setInterval();

}
carrusel.addEventListener("mouseenter",()=>{

    clearInterval(intervalo);

});
carrusel.addEventListener("mouseleave",()=>{

    iniciar();

});
