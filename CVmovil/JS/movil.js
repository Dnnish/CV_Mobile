// Selecciona todos los elementos con la clase "expandable-container"
const containers = document.querySelectorAll('.expandable-container');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');
// Referencia al body para cambiar su fondo
const body = document.body; 



containers.forEach((container, index) => {
    container.addEventListener('click', function () {
        navbar.classList.add('show');

        containers.forEach(otherContainer => {
            if (otherContainer !== this) {
                otherContainer.classList.add('hidden'); 
            }
        });

        this.classList.toggle('expanded');

        CambiarDeImagen(index);

        if (!this.classList.contains('expanded')) {
            navbar.classList.remove('show');
            containers.forEach(otherContainer => {
                otherContainer.classList.remove('hidden'); 
            });
        }
    });
});

// Navegación para mostrar contenedores específicos
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetIndex = this.getAttribute('data-target');

        containers.forEach((container, index) => {
            if (index == targetIndex) {
                container.classList.add('expanded');
                container.classList.remove('hidden');
                CambiarDeImagen(index);
            } else {
                container.classList.remove('expanded');
                container.classList.add('hidden');
            }
        });
    });
});

function CambiarDeImagen(index){
    switch (index) {
        case 0:
            body.style.backgroundImage = "url('/img/rojoNegro.jpg')";
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center"; 
            break;
        case 1:
            body.style.backgroundImage = "url('/img/azulNegro.jpg')";
            body.style.backgroundSize = "cover";
            body.style.backgroundPosition = "center"; 
            break;
        default:
            body.style.backgroundColor = "#FFFFFF";
            break;
    }
};
