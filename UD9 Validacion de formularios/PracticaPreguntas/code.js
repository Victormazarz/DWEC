$(document).ready(function () {
    CargarPreguntas()

    $("#boton").click(function () {
        ComprobarRespuesta()
    })

    $("#borrar").click(function () {
        Borrar()
    })
})

function CargarPreguntas() {

    $.ajax({
        url: 'preguntas.json',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            respuesta['preguntas'].forEach(element => {
                var pregunta = "<p style='' class='preguntas'>" + element.pregunta + "</p>"

                $("#preguntas").append(pregunta)
                for (const respuesta in element['respuesta']) {
                    var resp = "<input type='radio' class='radios' name='" + element.pregunta + "' value='" + `${respuesta}` + "'>" + `${respuesta}) ${element['respuesta'][respuesta]}`
                    $("#preguntas").append(resp)
                }
                
            });
        },

        error: function (xhr, status) {

        },
    });

}

function ComprobarRespuesta() {
    var correctas = []
    var preguntas = $(".preguntas")

    $.ajax({
        url: 'preguntas.json',
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            respuesta['preguntas'].forEach(element => {
                correctas.push(element['correcta'])

            });


            var cont = 0
            $(".radios").each(function (index) {
                if ($(this).is(':checked')) {

                    if (correctas[cont] == $(this).val()) {
                        console.log(cont + " CORRECTA")
                     
                    } else {
                        console.log(cont + " INCORRECTA")
                    }
                    cont++;
                }
               
            });
        },

        error: function (xhr, status) {

        },
    });





}

function Borrar() {
    $(".radios").prop( "checked", false );
}