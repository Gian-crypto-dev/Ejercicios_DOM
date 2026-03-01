window.onload = function() {

    const botonEnviar = document.getElementById('enviar');

    botonEnviar.addEventListener('click', mostrar);

}

function mostrar(event) {
         
    let campos = document.getElementsByName("menu");
    let seleccionado;
    campos.forEach(function(v) {
        if (v.checked)
            alert("Elegiste: " + v.value);
        
    });
     
    if(!seleccionado)
        alert("Error");
    
}

