console.log("Menu opciones");
console.log("1.Resultado de nota");
console.log("2.Mostrar mayor de 2 numeros\n");

let opcion =1;

switch (opcion) {
    case 1:

        console.log("Haz ingresado a la opcion");

        let nota =8.0;

        if (nota >= 6.0) {
            
            console.log("Felicidades estas aprobado con " + nota);

        } else {

            console.log("Lo siento estas reprobado " + nota);
            
        }

        break;

    case 2:

    let numero1=10;
    let numero2=20;

    if (numero1 > numero2) {

        console.log("El numero mayor es " + numero1);
        
    } else {

        console.log("El numero mayor es" + numero2);
        
    }
        break;

    default:
        console.log("Debe ingresar un opcion correcta 1 - 2");
        break;
}