window.onload = function() {
    window.datos = [
        { id: 1, nombre: "Hacer el TP", autor: "Laura", done: false },
        { id: 2, nombre: "Jugar al LOL", autor: "Matias", done: false },
        { id: 3, nombre: "Dominio total del mundo", autor: "Franco", done: false },
        { id: 4, nombre: "Viajar en el tiempo", autor: "Deborah", done: false }
    ];
    mostrarArreglo();
}

function agregarElemento() {
    let dato = document.getElementById('texto').value.trim();
    if (dato !== '') {
        datos.push({ id: datos.length + 1, nombre: dato, autor: "Usuario", done: false });
        document.getElementById('texto').value = '';
        mostrarArreglo();
    } else {
        alert('Ingresa Un Comentario Primero.');
    }
}

function mostrarArreglo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < datos.length; i++) {
        let dato = datos[i];

        let elementoDiv = document.createElement('div');
        elementoDiv.className = 'elemento';

        let nombreParrafo = document.createElement('p');
        nombreParrafo.innerText = dato.nombre;

        if (dato.id > 4) {
            let botonEliminar = document.createElement('button');
            botonEliminar.innerText = 'Eliminar';
            botonEliminar.setAttribute('data-index', i);
            botonEliminar.className = 'boton-eliminar';
            botonEliminar.onclick = confirmarEliminarElemento;
            elementoDiv.appendChild(botonEliminar);
        }

        elementoDiv.appendChild(nombreParrafo);
        resultado.appendChild(elementoDiv);
    }
}

function confirmarEliminarElemento() {
    let index = this.getAttribute('data-index');
    let confirmar = confirm('¿Estás seguro de eliminar este comentario?');

    if (confirmar) {
        datos.splice(index, 1);
        mostrarArreglo();
    }
}