document.onkeypress = buscarDNI;

function buscarDNI(e) {
    console.log(e.key)

    for (let i = 0; i < 9999; i++) {
        if (letraDNI(i) == e.key.toUpperCase()) {
            document.getElementById("resultados").innerHTML += i + e.key.toUpperCase() + " ,"
        }

    }

}

function letraDNI(numeroDni) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    return letras[numeroDni % 23];
}