jQuery(function () {
    $("#formulario").validate({
        rules: {
            nombre: {
                required: true,
            },
            edad: {
                required: true,
                number: true,
                min: 0,
                max: 100
            },
            correo: {
                required: true,
            },
            fecha: {
                required: true,
            },
            selector: {
                required: true,
            },
            checkBox: {
                required: true,
            },
            radioButton: {
                required: true,
            },
            usuario: {
                function() {
                    $.ajax({
                        type: "POST",
                        url: "compruebo.php",
                        data: { 'login': $("#usuario").val() },
                        success: function (msg) {
                            console.log(msg.disponible)
                           //console.log(msg)
        
                        }
                    });
                }
            }
        },
        messages: {
            nombre: {
                required: "El campo nombre es obligatorio",
            },
            edad: {
                required: "El campo edad es obligatorio",
            },
            correo: {
                required: "El campo correo es obligatorio",
            },
            fecha: {
                required: "El campo fecha de nacimiento es obligatorio",
            },
            selector: {
                required: "Hey vamos, por favor, selecciona una",
            },
            checkBox: {
                required: "Hey vamos, por favor, pulsa el boton",
            },
            radioButton: {
                required: "Hey vamos, por favor, selecciona uno",


            }
        },
        errorElement: 'span'
    });



});