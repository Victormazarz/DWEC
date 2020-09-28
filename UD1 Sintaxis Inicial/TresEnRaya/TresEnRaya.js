var tablero = new Array;

tablero[0] = ["_", "_", "_"];
tablero[1] = ["_", "O", "_"];
tablero[2] = ["_", "_", "_"];


function PintoTablero() {
    for (let i = 0; i < tablero.length; i++) {
        for (let a = 0; a < tablero.length; a++) {


            if (tablero[i][a] != "X" && tablero[i][a] != "O" && tablero[i][a] != "_") {

                document.getElementById("casilla_" + i + a).value = "X";
            } else {
                document.getElementById("casilla_" + i + a).value = tablero[i][a];;
            }

            if (tablero[i][a] == "O") {
                document.getElementById("casilla_" + i + a).disabled = true;

            }
        }
    }
}

function LeoTablero() {
    for (let i = 0; i < tablero.length; i++) {
        for (let a = 0; a < tablero.length; a++) {

            if (tablero[i][a] != "X" && tablero[i][a] != "O" && tablero[i][a] != "_") {
                tablero[i][a] = "X";
            } else {
                tablero[i][a] = document.getElementById("casilla_" + i + a).value;
            }



            if (tablero[i][a] != "_") {
                document.getElementById("casilla_" + i + a).disabled = true;
                //console.log(i + " - " + a + " : " + tablero[i][a])
            }
        }
    }
    TiradaMaquina();
}

function TiradaMaquina() {

    ComprobarEmpate();

    if (!ComprobarVictoria()) {

        while (true) {
            var i = Math.floor(Math.random() * 3);
            var a = Math.floor(Math.random() * 3);
            if (tablero[i][a] == "_") {
                tablero[i][a] = "O";
                break;
            }
        }
        PintoTablero();
        ComprobarVictoria();

    }


}

function ComprobarEmpate() {

    var cont = 0;

    for (let i = 0; i < tablero.length; i++) {
        for (let a = 0; a < tablero.length; a++) {
            if (tablero[i][a] != "_") {
                cont++;
            }
        }
    }

    if (cont == 9) {
        alert("Empate");
        location.reload()
    }
}

function ComprobarVictoria() {

    for (let i = 0; i < 3; i++) {

        if (tablero[i][0] == tablero[i][1] && tablero[i][0] == tablero[i][2] && tablero[i][0] != "_") {
            Ganador(tablero[i][0])
            return true;
        }

        if (tablero[0][i] == tablero[1][i] && tablero[0][i] == tablero[2][i] && tablero[0][i] != "_") {
            Ganador(tablero[0][i])
            return true;
        }
    }

    if (tablero[0][0] == tablero[1][1] && tablero[0][0] == tablero[2][2] && tablero[0][0] != "_") {
        Ganador(tablero[0][0])
        return true;
    }

    if (tablero[0][2] == tablero[1][1] && tablero[0][2] == tablero[2][0] && tablero[0][2] != "_") {
        Ganador(tablero[0][2])
        return true;
    }

    return false;

}

function Ganador(ganador) {
    switch (ganador) {
        case "O":
            alert("Ha ganado la maquina");
            location.reload()
            break;
        case "X":
            alert("Enhorabuena has ganado");
            location.reload()
            break;

        default:
            break;
    }
}