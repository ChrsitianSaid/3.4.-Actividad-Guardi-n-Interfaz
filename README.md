# 3.4.-Actividad-Guardi-n-Interfaz

# Personalización de Interfaz Web — Actividad 3.4

Este proyecto es una aplicación web interactiva que permite a los usuarios personalizar la apariencia de la interfaz ajustando sus preferencias de diseño, las cuales se almacenan localmente mediante cookies en el navegador.

## 🚀 Funcionalidades

- **Personalización de Nombre:** Permite al usuario introducir su nombre para generar un saludo dinámico mediante el DOM.
- **Selector de Color de Fondo:** Cambia el color de fondo de la interfaz en tiempo real.
- **Tema Claro / Oscuro:** Alterna entre un estilo claro (`.tema-claro`) y uno oscuro (`.tema-oscuro`).
- **Persistencia de Datos (Cookies):**
  - **Nombre y Color de Fondo:** Se guardan en cookies con una duración de 7 días.
  - **Tema:** Se guarda en una cookie de sesión.
- **Restablecer Interfaz:** Botón para eliminar las cookies de preferencia y devolver la interfaz a su estado por defecto.

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica del formulario y contenedores.
- **CSS3:** Estilos responsivos, variables y temas claro/oscuro con transiciones.
- **JavaScript :** Manipulación del DOM, gestión de eventos y administración de cookies.
- **JSDoc:** Generación automática de la documentación técnica en HTML.

## 📁 Estructura del Proyecto

```text
3.4.-Actividad-Guardi-n-Interfaz/
│
├── docs/             # Documentación HTML generada automáticamente por JSDoc
├── .gitignore        # Archivos excluidos del control de versiones
├── index.html        # Estructura principal de la aplicación
├── jsdoc.json        # Archivo de configuración de JSDoc
├── package.json      # Dependencias y scripts de Node.js
├── README.md         # Documentación general del proyecto
├── script.js         # Lógica de la aplicación y comentarios JSDoc
└── styles.css        # Estilos visuales y temas de la interfaz