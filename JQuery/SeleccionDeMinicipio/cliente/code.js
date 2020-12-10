$(document).ready(function () {

    $.ajax({

        url: '../servidor/cargaProvinciasJSON.php',
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            // console.log(respuesta.nombre);

            for (i in respuesta) {
                $("#provincias").append("<option value='" + i + "'>" + respuesta[i] + "</option>")
            }

            $("#provincias").change(function () {
                actualizaMunicipios()
               
            })
            $("#municipio").change(function () {
                $("#seleccion").text("Provincia: "+ $("#provincias :selected").text() +"- Municipio: "+ $("#municipio :selected").text());

               
            })
        },

        error: function (xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });

})

function actualizaMunicipios() {



    $.ajax({
        
        url: '../servidor/cargaMunicipiosJSON.php',
        data: {'provincia':$("#provincias :selected").val()},
        type: 'POST',
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta)
            for (i in respuesta) {
                $("#municipio").append("<option value='" + i + "'>" + respuesta[i] + "</option>")
            }
            $("#seleccion").text("Provincia: "+ $("#provincias :selected").text() +"- Municipio: "+ $("#municipio :selected").text());
        },

        error: function (xhr, status) {
            alert('Disculpe, existió un problema -'+status+" - "+xhr);
        }
    });

}