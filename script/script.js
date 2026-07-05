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