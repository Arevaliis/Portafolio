let lanzador = "#enlace-menu";
let desplegable = "#menu";
let despliegaClase = "menu-desplegado";

function nav() {
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click", despliegaMenu);

    let enlacesMenu = document.querySelectorAll(`${desplegable} a`);
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", () => {
            let despl = document.querySelector(desplegable);
            despl.classList.remove(despliegaClase);
        });
    });
}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav();