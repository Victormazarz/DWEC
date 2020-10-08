function EsPalindromo(numero) {
    var espalindromo = true;
    var numeroString = numero.toString();
    var numeroArray = numeroString.split("");
    var numeroArray2 = numeroString.split("");
    var numeroArray2Invertido = numeroArray2.reverse();

    for (let i = 0; i < numeroArray.length; i++) {

        if (numeroArray[i] != numeroArray2Invertido[i]) {
            espalindromo = false;
        }
    }
    return espalindromo;
}


function EsPrimo(numero) {
    var esprimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            esprimo = false;
        }
    }
    return esprimo;
}



var respuesta = new Array();
var limite = prompt("has que número quieres comprobar?")
var cont = 0;

for (let a = 0; a < limite; a++) {

    if (EsPrimo(a) && EsPalindromo(a)) {
        respuesta.push(a);
        cont++;
    }
}

var confirresp = confirm("Hay " + cont + " numero primos y palindromos hasta el " + limite + ", ¿Quieres verlos?");

if (confirresp) {

    document.writeln("respuesta: " + respuesta.join(" , "));

}


console.log(respuesta)