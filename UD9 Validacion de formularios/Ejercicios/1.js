function validacion() {
    if ($("#nombre").val() == "") {
        alert("Campo nombre Incorrecto")
        return false
    }
    if (isNaN($("#edad").val()) && $("#edad").val() > 0 && $("#edad").val() < 100) {
        alert("Campo edad Incorrecto")
        return false
    }


    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test($("#correo").val()))) {
        //comp = false;
        //alert("Campo email Incorrecto")
        //return false
    }
    if ($("#usuario").val() == "") {
        alert("Campo usuario Incorrecto")
        return false
    }
    if ($("#password").val() != $("#confirm_password").val()) {
        alert("Campo contraseña Incorrecto")
        return false
    }


    date = new Date($('#fecha').val());
    hoy = new Date();

    if (date > hoy) {
        alert("Campo fecha Incorrecto")
        return false
    }


    indice = $("#selector :selected").val()
    if (indice == null || indice == 0) {
        alert("Campo selector Incorrecto")
        return false
    }

    if (!$("#checkBox").prop('checked')) {
        alert("Campo checkbox Incorrecto")
        return false
    }


    opciones = document.getElementsByName("radioButton");

    var seleccionado = false;
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccionado = true;
            break;
        }
    }

    if (!seleccionado) {

        alert("Campo radiobutton Incorrecto")
        return false

    }



    str = "<div>"
    str += "<p>nombre: " + $("#nombre").val() + "</p><br>"
    str += "<p>Edad: " + $("#edad").val() + "</p><br>"
    str += "<p>Correo Electronico: " + $("#correo").val() + "</p><br>"
    str += "<p>Usuario: " + $("#usuario").val() + "</p><br>"
    str += "<p>Password: " + $("#password").val() + "</p><br>"
    str += "<p>Fecha: " + $("#fecha").val() + "</p><br>"
    str += "<p>Opcion Seleccionada: " + $("#selector :selected").val() + "</p><br>"
    str += "<p>Checkbox: " + $("#checkBox").prop('checked') + "</p><br>"
    str += "<p>Opcion Seleccionada: " + $('input:radio[name=radioButton]:checked').val() + "</p><br>"
    str += "</div>"
    console.log(str)
    $(document).html(str)


}