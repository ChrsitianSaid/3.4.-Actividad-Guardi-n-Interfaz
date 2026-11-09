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

/**
 * Genera dinámicamente el mensaje de bienvenida en el DOM.
 * @param {string} nombre - Nombre del usuario.
 */
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

/**
 * Valida y guarda las preferencias del usuario y actualiza el mensaje de bienvenida.
 */
function guardarCookie(nombre, valor, dias){
    const fecha = new Date();

    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));

    document.cookie= nombre + "=" + encodeURIComponent(valor) + "; expires=" + fecha.toUTCString() + "; path=/";
};

/**
 * Busca una cookie por su nombre y devuelve su valor decodificado.
 * @param {string} nombre - Nombre de la cookie que se desea buscar.
 * @returns {string|null} Valor de la cookie o null si no existe.
 */
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

/**
 * Elimina una cookie estableciendo una fecha de expiración anterior a la actual.
 * @param {string} nombre - Nombre de la cookie que se desea eliminar.
 */
function borrarCookie(nombre){
    document.cookie = nombre +  "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/" 
};

/**
 * Guarda una cookie en el navegador con una fecha de expiración determinada.
 * @param {string} nombre - Nombre de la cookie.
 * @param {string} valor - Valor que se almacenará en la cookie.
 * @param {number} dias - Número de días que permanecerá activa la cookie.
 */
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

/**
 * Recupera las preferencias guardadas en las cookies y las aplica a la interfaz.
 */
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