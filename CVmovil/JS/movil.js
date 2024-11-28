// Selecciona todos los elementos con la clase "expandable-container"
const containers = document.querySelectorAll('.expandable-container');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');

// Mostrar y controlar los contenedores
containers.forEach((container, index) => {
    container.addEventListener('click', function () {
        // Muestra la barra de navegación
        navbar.classList.add('show');

        // Oculta todos los demás contenedores
        containers.forEach(otherContainer => {
            if (otherContainer !== this) {
                otherContainer.classList.add('hidden'); // Oculta los demás
            }
        });

        // Alterna la clase 'expanded' para el contenedor clicado
        this.classList.toggle('expanded');

        // Si el contenedor clicado se contrae, muestra los demás y oculta la barra
        if (!this.classList.contains('expanded')) {
            navbar.classList.remove('show'); // Oculta la barra de navegación
            containers.forEach(otherContainer => {
                otherContainer.classList.remove('hidden'); // Muestra los demás
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
            } else {
                container.classList.remove('expanded');
                container.classList.add('hidden');
            }
        });
    });
});
