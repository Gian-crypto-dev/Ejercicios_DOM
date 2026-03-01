window.onload = function () {
    cargarImagen ();
}

function cargarImagen() {
    let destino = document.getElementById("imagen");

    if (destino == undefined)
        alert("No existe el bloque destino")
    else{
        let nodoImg = document.createElement("img");
        nodoImg.setAttribute("src", "img/programa.jpg");
        destino.appendChild(nodoImg);
    }
}