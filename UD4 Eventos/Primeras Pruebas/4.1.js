/*window.addEventListener("mousemove", e => {

    document.getElementById("coords").innerHTML = e.clientX + " : " + e.clientY;
    console.log(e.clientX + " : " + e.clientY);
}, false);*/


document.onmousemove = mostrarPosicion;


function mostrarPosicion(evento) {

    console.log(evento.clientX + " : " + evento.clientY);
    document.getElementById("coords").innerHTML = evento.clientX + " : " + evento.clientY;

}