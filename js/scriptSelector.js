window.onload = function () {

    const botonCopiar = document.getElementById('copiar');
    botonCopiar.addEventListener('click',fCopiar);
}

function fCopiar() {

    
    const destino = document.querySelector("p");
    const boton = document.getElementById("copiar");

    if(boton.textContent == "Copiar"){

        let textoParaCopiar = document.querySelector(".texto").textContent;
        destino.textContent = textoParaCopiar;
        boton.textContent = "Borrar";

    }
    
    else{

        destino.textContent = "";
        boton.textContent = "Copiar";

    }
}