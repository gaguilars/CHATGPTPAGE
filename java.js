document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("miBoton");
    
    boton.addEventListener("mouseover", function () {
        boton.style.transition = "transform 1s ease";
        boton.style.transform = "scale(.9)";
        boton.style.backgroundColor = "#d98880";
        boton.style.border = "none"; 
        boton.style.cursor= "pointer";
        boton.style.padding = "10px 20px";
    });
    
    boton.addEventListener("mouseout", function () {
        boton.style.transition = "transform 1s ease";
        boton.style.transform = "scale(1)";
        boton.style.backgroundColor = "black";
    });
});

//cambiar el color de la barra de desplazamiento de la ventana
document.addEventListener("DOMContentLoaded", function () {
    const style = document.createElement("style");
    style.innerHTML = `
        ::-webkit-scrollbar {
            width: 12px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #d98880; /* Color de la barra de desplazamiento */
            border-radius: 5px;
        }
        ::-webkit-scrollbar-track {
            background-color: lightgray; /* Color de fondo de la barra */
        }
    `;
    document.head.appendChild(style);
});

function cambiarImagen() {
    document.getElementById("imagenDinamica").src = "C:\Users\Guillermo Aguilar\Downloads\codecanyon-bVe3XFVR-botble-cms-php-platform-based-on-laravel-framework\main\public\vendor\core\core\acl\images\backgrounds\1.jpg";
}

let indice = 0;
const carrusel = document.querySelector('.carousel');
const imagenes = document.querySelectorAll('.carousel img');
const total = imagenes.length;

function moverCarrusel(direccion) {
    indice += direccion;
    if (indice < 0) {
        indice = total - 1;
    } else if (indice >= total) {
        indice = 0;
    }
    const desplazamiento = -indice * 100;
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
}