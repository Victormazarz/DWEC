

var numero = prompt("introduce un número");
var comp = true;
for (let i = 2; i < numero; i++) {
    if (numero%i==0) {
       comp = false;
    }
}

if (comp) {
    console.log("Es primo")
}else{
    console.log("No es primo")
}

reverse(numero);

function reverse(num) {

   var aux = "";
    for (let i = num.length; i > 0; i--) {
        aux +=num.charAt(i-1)
    }

    if (num == aux) {
        console.log("Es palindromo")
    } else {
        console.log("No es palindromo")
    }

    

}






