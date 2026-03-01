window.onload = function () {

    const destino = document.getElementById('destino');
    const botonRojo = document.getElementById('rojo');
    const botonAzul = document.getElementById('azul'); 
    const botonRestablecer = document.getElementById('restablecer');

    botonRojo.addEventListener('click', function () {
        destino.style.backgroundColor = 'red';
    });

    botonAzul.addEventListener('click', function () {
        destino.style.backgroundColor = 'blue';
    });

    botonRestablecer.addEventListener('click', function () {
        destino.style.backgroundColor = 'white';
    });
}