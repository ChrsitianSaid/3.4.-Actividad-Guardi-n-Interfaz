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

function cambiarColorFondo(){
    const colorSeleccionado = selectorColor.value;
    document.body.style.backgroundColor = colorSeleccionado;
}

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

}

function mostrarBienvenida(nombre) {
    const titulo = document.createElement("h2");
    const mensaje = document.createElement("p");

    titulo.textContent = "!Bienvenido, " + nombre + "!";
    mensaje.textContent = "ya puedes personalizar tú experiencia.";

    contenedorBienvenida.appendChild(titulo);
    contenedorBienvenida.appendChild(mensaje);
}

function guardarPreferencias() {

    const nombre = inputNombre.value;
    mostrarBienvenida(nombre);
}

botonGuardar.addEventListener("click", guardarPreferencias);

function guardarPreferencias() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Debes introducir un nombre.");
        return;
    }

    contenedorBienvenida.innerHTML = "";
    mostrarBienvenida(nombre);
}

