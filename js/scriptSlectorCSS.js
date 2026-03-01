window.onload = function () {
    const boton = document.getElementById('btn');
    boton.addEventListener('click', colorear);
}

function colorear () {
    var cabs = document.querySelectorAll("h2,h3");
    cabs.forEach(function(v){v.style.color = "red"});
}