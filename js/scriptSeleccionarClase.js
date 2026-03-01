window.onload = function() {
    const boton = document.getElementById('btn');

    boton.addEventListener('click', listar);

}

function listar() {
    const boton = document.getElementById('btn');
    let res = document.getElementById('resultado');

    if(boton.textContent== "Leer"){
    let lista = document.getElementById('flores');

    let items = lista.getElementsByClassName("item");

    items = Array.from(items);
    items = items.sort(function(a,b) {
        return (a.innerText>b.innerText)?1:-1
    });

    let txt = '';
    for (let item of items) {
        txt+= (item.innerText+"<br>")
    };
    res.innerHTML = txt;
    boton.textContent = "Ocultar";

    }

    else {
        res.innerHTML = "";
        boton.textContent= "Leer";

    }


}