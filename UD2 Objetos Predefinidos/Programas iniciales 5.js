var cadena = prompt("introduce una cadena").split(":");

console.log(cadena);

servidor = cadena[3].split("@")

document.write( "Codigo postal: "+cadena[4]+"</br>"+
                "Apellidos: "+cadena[1]+"</br>"+
                "Correo: "+cadena[3]+"</br>"+
                "Servidor de correo: "+servidor[1])







