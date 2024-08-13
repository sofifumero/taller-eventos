// Selecciona el div por su ID

let div = document.getElementById('miDiv');
let boton = document.querySelector('button');

// Aplica el estilo al div

div.style.padding = '5px';
div.style.backgroundColor = 'green';

// Manejador de eventos para el click en el div

div.addEventListener('click', function(){
    alert('Hola! Soy el div');
});

// Manejador de evento para el click del boton

boton.addEventListener('click', function(event) {
    alert('Hola!');
    event.stopPropagation(); // Previene la propagación del evento al div
});