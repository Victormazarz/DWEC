var tablero = new Array;

tablero[0] = ["_", "_", "_"];
tablero[1] = ["_", "O", "_"];
tablero[2] = ["_", "_", "_"];

function PintoTablero() {

    for (let i = 0; i < tablero.length; i++) {
        for (let a = 0; a < tablero.length; a++) {

            if (tablero[i][a] == "X") {
                document.getElementById("casilla_" + i + a).innerHTML = "<img src='img/x.png'>";
            }

            if (tablero[i][a] == "O") {
                document.getElementById("casilla_" + i + a).innerHTML = "<img src='img/o.png'>";
            }

            if (tablero[i][a] == "_") {
                document.getElementById("casilla_" + i + a).innerHTML = "<img src='img/_.png'>";
            }
        }
    }

}

function jugada(casilla) {

    console.log(casilla.id)

    casilla_i = casilla.id.substring(8, 9);
    casilla_j = casilla.id.substring(9, 10);


    if (tablero[casilla_i][casilla_j] == "_") {
        tablero[casilla_i][casilla_j] = "X"
        PintoTablero();
        TiradaMaquina()
    } else {
        console.log("Tirada no valida");
    }
}

function TiradaMaquina() {

    var i = Math.floor(Math.random() * 3);
    var a = Math.floor(Math.random() * 3);
    if (tablero[i][a] == "_") {
        tablero[i][a] = "O";
    } else {
        TiradaMaquina();
    }

}