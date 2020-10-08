function init() {

    var resp
    var empezado = false;
    var terminado = true;

    document.getElementById("empezar").addEventListener("click", e => {

        if (empezado) {
            console.log("El saludo ya ha empezado")
        } else {
            resp = setInterval("alert('Hola')", 5000);
            empezado = true;
            terminado = false;
        }

    })

    document.getElementById("terminar").addEventListener("click", e => {
        if (terminado) {
            console.log("El saludo ya ha terminado")
        } else {

            clearTimeout(resp);
            terminado = true;
            empezado = false;
        }
    })

}