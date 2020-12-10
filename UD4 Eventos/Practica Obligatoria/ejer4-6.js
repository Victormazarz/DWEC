var id = 0;
var intervalo;
var tiempo = 3000;
var ContadorRondas = 0;

function pintoCirculoRojo() {
    init()
    id = CirculoAleatorio();
    document.getElementById("circulo_" + id).className = "objetivo";

    intervalo = setInterval(function reloj() {
        alert("Has perdido, numero de rondas: " + ContadorRondas);
    }, tiempo);
}

function init() {
    var circuloarray = document.getElementsByClassName("circulo");
    for (let i = 0; i < circuloarray.length; i++) {
        circuloarray[i].onclick = click;
    }
}

function CirculoAleatorio() {
    do {
        var num = Math.floor(Math.random() * 9);
    } while (num == id);

    return num
}

function click(circulo) {

    if (circulo.target.id == "circulo_" + id) {

        document.getElementById("circulo_" + id).removeAttribute("class");
        id = CirculoAleatorio();
        console.log(id)
        document.getElementById("circulo_" + id).className = "objetivo";
        ContadorRondas++;
        SubirTiempo();

    }
}

function SubirTiempo() {
    clearTimeout(intervalo)
    tiempo -= 100;
    intervalo = setInterval(function reloj() {
        alert("Has perdido, numero de rondas: " + ContadorRondas);
        clearTimeout(intervalo)
        tiempo = 3000;
        ContadorRondas = 0;
    }, tiempo);
}