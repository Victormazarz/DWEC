/*window.addEventListener("dblclick", e => {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + r + "," + g + "," + b + ")";

    console.log("hola");
    document.getElementById('cuerpo').style.background = bgColor;
}, false);*/


document.ondblclick = e => {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    document.body.bgColor = "rgb(" + r + "," + g + "," + b + ")";

}