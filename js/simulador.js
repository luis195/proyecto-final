
class Servicio {
    constructor(tipo, cantidad, precio) {
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const servicios = [];

function ingresarServicio(){
        switch (valorServicio){
            case 1:
                servicios.push(new Servicio("Ilustracion", "1", "20000"));
                break;
            case 2:
                servicios.push(new Servicio("Asesoria", "1", "10000"));
                break;
            case 3:
                servicios.push(new Servicio("Creacion de Contenido", "1", "8000"));
                break;
            case 4:
                servicios.push(new Servicio("Branding", "1", "13000"))
        }
}
/*
let cuentaFinal = ingresarServicio()
let total = JSON.stringify(servicios);
let listaServicios = JSON.parse(total)
for (let i in listaServicios){

    let tipoServicio = document.createTextNode(listaServicios[i].tipo)
    let nodo= document.createElement("li")
    nodo.className = "list-group-item"
    nodo.appendChild(tipoServicio)
    document.getElementById("lista").appendChild(nodo);

}



alert("Sus serficios seleccionados son: \n " + total + " \n y el total sera: \n" +cuentaFinal);





}*/
//$("#listaServicios").onchange(
let listaServicios = document.getElementById("listaServicios");
let agregar = document.getElementById("agregar")

    function escogerServcio() {
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

        //agregar.addEventListener("click", ingresarServicio)
        console.log(servicios)
    }
listaServicios.onchange = escogerServcio;
escogerServcio();
//)


