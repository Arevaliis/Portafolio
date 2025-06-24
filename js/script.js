let lanzador = "#enlace-menu";
let desplegable = "#menu";
let despliegaClase = "menu-desplegado";

const popup = document.getElementById("cookiePopUp");
const btn = document.getElementById("acceptCookies");
const contTotal = document.getElementById("cont-total");

if(!localStorage.cookiesAccepted){
    popup.classList.add("show");
}

btn.addEventListener("click", function(){
        localStorage.cookiesAccepted = "true";
        popup.classList.remove("show");
        contTotal.classList.remove("show");
    }
)

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

const body = document.getElementsByTagName("body")[0];
const esIos  = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) ||  navigator.userAgent.match(/iPod/i)

if (esIos && screen.width <= 480){
        body.style.backgroundImage = "none";
        body.style.backgroundColor = "rgb(12, 12, 12)";
        body.style.backgroundAttachment = "scroll";
    }