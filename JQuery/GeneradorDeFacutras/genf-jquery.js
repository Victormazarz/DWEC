$(document).ready(function () {

    console.log("JQuery cargado");

    $.ajax({

        url: 'productos.json',
        type: 'GET',
        dataType: 'json',

        success: function (respuesta) {
            console.log(respuesta.producto[1].name);

            for(i in respuesta.producto){
                $("#producto").append("<option value='"+respuesta.producto[i].precio+"'>"+respuesta.producto[i].name+"</option>")
            }
        },

        error: function (xhr, status) {
            alert('Disculpe, existió un problema');
        },
    });


    $("#producto").change(function(){

        $("#puni").val($("#producto :selected").val())

    })

    $("#anyadir").click(function(){
        nombre = $("#producto :selected").text()
        cantidad = $("#cantidad").val();
        puni = $("#producto :selected").val()
        $("#tabla tbody").append("<tr><td>"+nombre+"</td><td>"+cantidad+"</td><td>"+puni+"</td><td class='ptotal'>"+cantidad*puni+"</td><td><button class='borrar'>Borrar</button></td></tr>")
        $(".borrar").each(function() {
           $(this).parent().parent().remove();
           actualizar();
        });    
        actualizar()
    })

    function actualizar() {
        var total=0;
        $(".ptotal").each(function() {
            total+=parseFloat($(this).text());
        })        
        console.log(total)

        $("#base").text(total);
        $("#iva").text(total*0.21);
        $("#total").text(total*1.21);
    }

    function recalcular() {
        
    }

});