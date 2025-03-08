//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

function copyAlias() {
    const aliasText = document.getElementById("aliasText").innerText;
    navigator.clipboard.writeText(aliasText).then(() => {
        alert("Alias copiado: " + aliasText);
    });
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector('.carrusel');
    const btnAnterior = document.querySelector(".boton-anterior");
    const btnSiguiente = document.querySelector(".boton-siguiente");
    const tarjetas = document.querySelectorAll(".marco-invitacion");
    const totalMarcos = tarjetas.length; // Definir el total de tarjetas
    let indice = 0;

    function actualizarCarrusel() {
        carrusel.style.transform = `translateX(${-indice * 100}%)`;
    }

    btnSiguiente.addEventListener("click", () => {
        if (indice < totalMarcos - 1) {
            indice++;
        } else {
            indice = 0; // Reinicia al inicio si llega al final
        }
        actualizarCarrusel();
    });

    btnAnterior.addEventListener("click", () => {
        if (indice > 0) {
            indice--;
        } else {
            indice = totalMarcos - 1; // Vuelve al final si está en el inicio
        }
        actualizarCarrusel();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elementosAObservar = document.querySelectorAll(
        ".contenedor-carrusel, .contenido-ubicacion, .contenedor-foto, .sobremi, .contenedor-form"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            } else {
                entry.target.classList.remove("mostrar"); // Permite que la animación se ejecute en ambas direcciones
            }
        });
    }, {
        threshold: 0.3 // Se activa cuando el 30% del elemento es visible
    });

    elementosAObservar.forEach(elemento => observer.observe(elemento));
});


document.addEventListener("DOMContentLoaded", function () {
    const finalSeccion = document.querySelector("#final");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                finalSeccion.classList.add("mostrar");
            }
        });
    }, { threshold: 0.3 });

    observer.observe(finalSeccion);
});




document.addEventListener("DOMContentLoaded", function () {
    const contenedorBurbujas = document.querySelector(".burbujas");

    function crearBurbuja() {
        const burbuja = document.createElement("span");
        burbuja.classList.add("burbuja");

        // Posición horizontal aleatoria
        burbuja.style.left = Math.random() * 100 + "vw";

        // Tamaño aleatorio de las burbujas
        const size = Math.random() * 20 + 10; // Entre 10px y 30px
        burbuja.style.width = size + "px";
        burbuja.style.height = size + "px";

        // Duración de la animación aleatoria para que no todas las burbujas suban igual
        burbuja.style.animationDuration = Math.random() * 3 + 4 + "s"; // Entre 4s y 7s

        contenedorBurbujas.appendChild(burbuja);

        // Eliminar la burbuja cuando termine su animación
        setTimeout(() => {
            burbuja.remove();
        }, 7000);
    }

    // Crear burbujas cada 500ms
    setInterval(crearBurbuja, 500);
});
