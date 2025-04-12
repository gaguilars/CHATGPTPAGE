window.addEventListener('load', function() {
    var modalPublicidad = new bootstrap.Modal(document.getElementById('publicidadModal'));
    modalPublicidad.show();
  });

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
            width: 0px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #d98880; /* Color de la barra de desplazamiento */
            border-radius: 0px;
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

/*document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { image: "C:\Users\Guillermo Aguilar\OneDrive - Distribuidora Tamariz\Escritorio\GUILLERMO AGUILAR SANCHEZ 18022025\Desktop\GA\Prime\prueba onlina\img\doslunas1.png", name: "Crema", description: "Crema Rehidratante" },
        { image: "https://via.placeholder.com/150", name: "Producto 2", description: "Descripción del producto 2" },
        { image: "https://via.placeholder.com/150", name: "Producto 3", description: "Descripción del producto 3" }
    ];
    
    const container = document.getElementById("product-container");
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="buy-button">Comprar</button>`;
        container.appendChild(card);
    });
});*/

const postContainer = document.getElementById("postContainer");
    const asideContainer = document.getElementById("asideContainer");
    let postCount = 0;
    let isLoading = false;

    function createPost(content) {
      const post = document.createElement("div");
      post.className = "post";
      /*post.innerHTML = `<h5>Publicación ${postCount}</h5><p>${content}</p>`;*/
      return post;
    }

    function loadMorePosts() {
      if (isLoading) return;
      isLoading = true;
      
      setTimeout(() => {
        for (let i = 0; i < 0; i++) {
          postCount++;
          const newPost = createPost("Este es el contenido de la publicación número " + postCount + ".");
          postContainer.appendChild(newPost);
        }
        isLoading = false;
      }, 500);
    }
    // Cargar publicaciones iniciales
    loadMorePosts();
    // Detectar scroll al final


    // Función para mostrar/ocultar el aside
    function toggleAside() {
      if (asideContainer.style.display === "none") {
        asideContainer.style.display = "block";
        main.style.left= "380px";
      } else {
        asideContainer.style.display = "none";
        main.style.left= "0px";
      }
    }

    function ajustarAlturaAside() {
      const altoPantalla = window.innerHeight;
      const aside = document.getElementById('miAside');
      aside.style.height = `${altoPantalla}px`;
      //main.style.position= `fixed`;
    }
    // Ejecutar al cargar la página
    ajustarAlturaAside();
    // Volver a ajustar si cambia el tamaño de la ventana
    window.addEventListener('resize', ajustarAlturaAside);

  
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#menu .nav-link");

    links.forEach(link => {
      link.addEventListener("click", function () {
        // Quitar la clase 'active' de todos los enlaces
        links.forEach(l => l.classList.remove("active"));

        // Agregar la clase 'active' al enlace clickeado
        this.classList.add("active");
      });
    });
  });

