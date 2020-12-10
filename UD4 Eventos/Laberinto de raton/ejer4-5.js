var reloj;
var cont = 0;
var final;

function init() {
    final = false;
    document.getElementById("salida").onmouseleave = salidaposicion;
}

function salidaposicion() {
    console.log("saliste")
    final = true;
    reloj = setInterval(function reloj() {
        cont++;
    }, 100);

    var paredes = document.getElementsByClassName("pared");

    for (let i = 0; i < paredes.length; i++) {
        paredes[i].onmouseover = fallo;
    }


    document.getElementById("final").onmouseover = finalpartida;
    document.getElementById("tablero").onmouseleave = fallo;
}

function fallo() {
    final = false;
    alert("Has perdido")
    location.reload();
}

function finalpartida() {

    if (final) {
        alert("Has Ganado, has tardado: " + (cont / 10) + " segundos")
        clearTimeout(reloj)
        location.reload();
    }
}