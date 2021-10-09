class Servicio {
    constructor(tipo, cantidad, precio) {
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

let servicios = [];
let listaServicios = document.getElementById("listaServicios");
let agregar = document.getElementById("agregar")
let cuenta = document.getElementById("calcular")
let tablasInsertada = document.getElementById("tablaInsertada")
let reiniciar = document.getElementById("reiniciar")
let total = 0;
$("#nombre").val();
$("#email").val();
$("#mensaje").val();
$("#body").fadeIn("slow")
$("#presupuesto").fadeIn("slow")
$("#imagen").fadeIn("slow")
$("#caculadora").fadeIn("slow")


function ingresarServicio(){
    switch (listaServicios.value){
        case "1":
            servicios.push(new Servicio("Ilustracion", "1", "20000"));
            break;
        case "2":
            servicios.push(new Servicio("Asesoria", "1", "10000"));
            break;
        case "3":
            servicios.push(new Servicio("Creacion de Contenido", "1", "8000"));
            break;
        case "4":
            servicios.push(new Servicio("Branding", "1", "13000"))
    }
    return servicios
}

// se encarga de manejar el evento de las listas
function escogerServicio() {
    let valorServicio = listaServicios.value;
    // encontrar el textbox
    let textBox = document.getElementById("campoServicio");
    //console.log(valorServicio)
    switch (valorServicio) {
        case "1":
            textBox.value = "Ilustracion";
            break;

        case "2":
            textBox.value = "Asesoria";
            break;

        case "3":
            textBox.value = "Creacion de Contenido";
            break;

        case "4":
            textBox.value = "Branding";

    }
    agregar.onclick = ingresarServicio
}

listaServicios.onchange = escogerServicio;
cuenta.onclick = function calculoTarifa(){

    for (let i in servicios){
        total = parseInt(servicios[i].precio) + total;
    }
    let cantidadFilasTabla = $('#tablaInsertada tr').length;
    if (cantidadFilasTabla > 0){
        $("#tablaInsertada").remove();
        total = 0;
    }

    if (total !== 0){

        $("#tabla").append("<table id='tablaInsertada' class=\"table\">\n" +
            "  <thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">#</th>\n" +
            "      <th scope=\"col\">Servicio</th>\n" +
            "      <th scope=\"col\">Monto</th>\n" +
            "      <th scope=\"col\">Precio</th>\n" +
            "    </tr>\n" +
            "  </thead>\n" +
            "  <tbody>\n" +
            "  </tbody>\n" +
            "</table>")

        for (let i in servicios){
            $("#tabla").find("tbody").append("<tr>\n" +
                "      <th scope=\"row\">"+(i)+"</th>\n" +
                "      <td>"+(servicios[i].tipo)+"</td>\n" +
                "      <td>"+servicios[i].cantidad+"</td>\n" +
                "      <td>"+servicios[i].precio+"</td>\n" +
                "    </tr>\n")
        }
        $("#tabla").find("tbody").append("<tr>\n" +
            "      <th scope=\"row\">Total</th>\n" +
            "      <td></td>\n" +
            "      <td></td>\n" +
            "      <td>"+total+"</td>\n" +
            "    </tr>\n")

        }


    return total;
}; //No se por que me funciona de esta forma y no como lo venia implementando
reiniciar.onclick = function (){
    servicios = [];
    $("#tablaInsertada").remove();
    total = 0;
}

