var respa = "";
var resp = setInterval("letras(prompt('Introduce DNI'))", 2000);


function letras(params) {

    var letras = new Array();

    if (params == -1) {
        console.log(respa)
        clearTimeout(resp);
    } else {
        respa = respa + params.charAt(8) + " , ";
        letras.push(params.charAt(8));
    }
}