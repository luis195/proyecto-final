class Servicio {
    constructor(tipo, cantidad, precio) {
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    presupuestar(){
        console.log("Usted ha presupuestado" + this.tipo)
    }
}
const servicios = [];
function ingresarServicio(){

    let continuar = 1;
    let cuenta = 0;
    while (continuar === 1){
        let servicio = parseInt(prompt("Ingrese servicio a cotizar, 1. Ilustracion , 2. Asesoria , 3. Creacion de contenido" +
            ", 4. Branding"));
        switch (servicio){
            case 1:
                servicios.push(new Servicio("Ilustracion", "1", "20000"));
                cuenta = cuenta + 20000;
                break;
            case 2:
                servicios.push(new Servicio("Asesoria", "1", "10000"));
                cuenta = cuenta + 10000;
                break;
            case 3:
                servicios.push(new Servicio("CreacionContenido", "1", "8000"));
                cuenta = cuenta + 8000;
                break;
            case 4:
                servicios.push(new Servicio("Branding", "1", "13000"))
                cuenta = cuenta + 13000;
        }
        continuar = parseInt(prompt("¿Desea seguir ingresando? 1. SI , 2. NO"));

        if (continuar === 2){
            return servicios;
        }
        else {
            continuar = 1;
        }
    }
}

let total = ingresarServicio()
alert(total.toString());





