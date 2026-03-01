window.onload = function(){

    const bombilla = document.getElementById("bombilla");
    let encendida = false;

    bombilla.onclick =function() {
        encendida = !encendida;

        if(encendida)
            bombilla.src= "img_bombillas/pic_bulbon.gif";
        else
            bombilla.src ="img_bombillas/pic_bulboff.gif";
    }

}