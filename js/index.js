


$("#body").fadeIn("slow")
$("#presupuesto").fadeIn("slow")
$("#imagen").fadeIn("slow")
$("#caculadora").fadeIn("slow")
const URLGET   = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar


//Escuchamos el evento click del botón agregado
$('#btnEnviar').click(() => {
    let nombreContacto = $("#nombre").val()
    let emailContacto = $("#email").val()
    let mensajeContacto = $("#mensaje").val()
    const infoPost =  { nombre: nombreContacto, email: emailContacto, mensaje: mensajeContacto }
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            console.log(infoPost)
        }
    });
});



