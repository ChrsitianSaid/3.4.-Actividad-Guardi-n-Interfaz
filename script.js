/**
 * @file script.js
 * @description Gestiona la personalización de la interfaz
 * @author Christian Said
 * @version 1.0.0
 */


const selectorColor = document.getElementById("color-fondo");
const selectorTema = document.getElementById("tema-visual");
const contenedorBienvenida = document.getElementById("contenedor-bienvenida");
const inputNombre = document.getElementById("nombre-usuario");
const botonGuardar = document.getElementById("guardar-preferencias");
const botonRestablecer = document.getElementById("restablecer-interfaz");

function cambiarColorFondo(){
    const colorSeleccionado = selectorColor.value;
    document.body.style.backgroundColor = colorSeleccionado;
};

selectorColor.addEventListener("input", cambiarColorFondo);
selectorTema.addEventListener("change", cambiarTema);

function cambiarTema() {
    const temaSeleccionado = selectorTema.value;

    document.body.classList.remove("tema-claro");
    document.body.classList.remove("tema-oscuro");

    if(temaSeleccionado === "claro"){

        document.body.classList.add("tema-claro");
    
    } else if (temaSeleccionado === "oscuro") {
    
        document.body.classList.add("tema-oscuro");
    
    };

};

function mostrarBienvenida(nombre) {
    const titulo = document.createElement("h2");
    const mensaje = document.createElement("p");

    titulo.textContent = "!Bienvenido, " + nombre + "!";
    mensaje.textContent = "ya puedes personalizar tú experiencia.";

    contenedorBienvenida.appendChild(titulo);
    contenedorBienvenida.appendChild(mensaje);
};

botonGuardar.addEventListener("click", guardarPreferencias);

function guardarPreferencias() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Debes introducir un nombre.");
        return;
    };

    const color = selectorColor.value;
    const tema = selectorTema.value;

    guardarCookie("nombre",  nombre, 7);
    guardarCookie("color",  color, 7);

    document.cookie = "tema=" + encodeURIComponent(tema) + "; path=/";

    contenedorBienvenida.innerHTML = "";
    mostrarBienvenida(nombre);
};

function guardarCookie(nombre, valor, dias){
    const fecha = new Date();

    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));

    document.cookie= nombre + "=" + encodeURIComponent(valor) + "; expires=" + fecha.toUTCString() + "; path=/";
};

function leerCookie(nombre){
    const cookies = document.cookie.split("; ");

    for (let cookie of cookies){
        const partes = cookie.split("=");

        if (partes[0] === nombre) {
            return decodeURIComponent(partes.slice(1).join("="))
        };
    };

    return null;
};

function borrarCookie(nombre){
    document.cookie = nombre +  "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/" // con esto la cookie caduca de forma inmediata al ser una fecha inmediata.
};

function restablecerInterfaz(){

    borrarCookie("nombre");
    borrarCookie("color");
    borrarCookie("tema");

    document.getElementById("formulario-preferencias").reset();

    document.body.style.backgroundColor = "";

    document.body.classList.remove ("tema-oscuro");
    document.body.classList.remove ("tema-claro");
    document.body.classList.add ("tema-claro");

    contenedorBienvenida.innerHTML = "";
};

function cargarPreferencias(){
    const nombre = leerCookie("nombre");
    const color = leerCookie("color");
    const tema = leerCookie("tema");

    
    if (nombre !== null) {
        inputNombre.value = nombre;
        contenedorBienvenida.innerHTML = "";
        mostrarBienvenida(nombre);
    };

    if (color !== null){
        selectorColor.value = color;
        document.body.style.backgroundColor = color;
    };

    if (tema !== null){
        selectorTema.value = tema;
        cambiarTema();
    };
};

cargarPreferencias();

botonRestablecer.addEventListener("click", restablecerInterfaz);