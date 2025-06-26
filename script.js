// Animación de entrada para la sección hero
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.hero-section').classList.add('show');
    cargarProyectos();
    aplicarModo('dark'); // Forzar modo oscuro
});

// Proyectos de ejemplo (puedes editar o agregar más)
const proyectos = [
    {
        titulo: 'Mi Primer Sitio Web',
        descripcion: 'Un sitio web personal hecho con HTML, CSS y JS.',
        imagen: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
        link: '#'
    },
    {
        titulo: 'App de Tareas',
        descripcion: 'Aplicación para gestionar tareas diarias, usando Bootstrap.',
        imagen: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
        link: '#'
    },
    {
        titulo: 'Portafolio Creativo',
        descripcion: 'Un portafolio interactivo y moderno.',
        imagen: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        link: '#'
    }
];

function cargarProyectos() {
    const contenedor = document.getElementById('proyectos-lista');
    if (!contenedor) return;
    proyectos.forEach(proy => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card h-100">
                <img src="${proy.imagen}" class="card-img-top" alt="${proy.titulo}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${proy.titulo}</h5>
                    <p class="card-text">${proy.descripcion}</p>
                    <a href="${proy.link}" class="btn btn-outline-primary mt-auto" target="_blank">Ver más</a>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });
}

// Manejo del formulario de contacto
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí podrías agregar lógica para enviar el formulario por email o API
        form.reset();
        document.getElementById('contacto-exito').classList.remove('d-none');
        setTimeout(() => {
            document.getElementById('contacto-exito').classList.add('d-none');
        }, 4000);
    });
}

// Cambiar modo claro/oscuro y pixel retro
const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

function aplicarModo(modo) {
    if (modo === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
    // Pixel retro
    body.classList.add('pixel');
    document.querySelector('.hero-section').classList.add('pixel');
    document.querySelector('.creative-folder').classList.add('pixel');
    document.querySelector('.folder-tab').classList.add('pixel');
    document.querySelectorAll('.tech-icon').forEach(e => e.classList.add('pixel'));
    document.querySelectorAll('.card').forEach(e => e.classList.add('pixel'));
    document.getElementById('contact-form').classList.add('pixel');
    document.querySelector('footer').classList.add('pixel');
}

function quitarPixel() {
    body.classList.remove('pixel');
    document.querySelector('.hero-section').classList.remove('pixel');
    document.querySelector('.creative-folder').classList.remove('pixel');
    document.querySelector('.folder-tab').classList.remove('pixel');
    document.querySelectorAll('.tech-icon').forEach(e => e.classList.remove('pixel'));
    document.querySelectorAll('.card').forEach(e => e.classList.remove('pixel'));
    document.getElementById('contact-form').classList.remove('pixel');
    document.querySelector('footer').classList.remove('pixel');
}
