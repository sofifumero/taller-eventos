// Selecciona el div por su ID

let div = document.getElementById('miDiv');

// Aplica el estilo al div

div.style.padding = '5px';
div.style.backgroundColor = 'green';

// Manejador de eventos para el click en el div

div.addEventListener('click', function(){
    alert('Hola! Soy el div');
});