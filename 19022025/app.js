/*
if(condicion){
    ejecuta algo si la condiciones true
}
fin del programa

if(condicion){
    ejecuta si la condicion es true
}else{
    ejecuta si la condicion es false
}*/
/*
let palabra = prompt("Ingresa el nombre de tu escuela");

if(palabra == "UNAM"){
    console.log("Palabra correcta");
}else{
    console.log("Error")
}*/
/*
let numero = prompt("Ingresa un numero");

if(numero == 10){
    console.log("Bien :3");
    console.log(typeof numero);
}*/
/*
let dato = prompt("Ingresa un dato");

if(parseInt(dato) === 10){
    console.log("Bien :3")
}else{
    console.log("No se puede bb por que es: "+ typeof dato);
}*/
/*
let opcionUser = prompt(`
    Elija una opcion: 
     1-.Pelicula
     2-.Libro
     3-.Juego`);
switch(opcionUser){
    case "1":
        console.log("El principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("LoL");
        break;
    default:
        console("Opcion no valida");
        break;
}*/
/*
let numero = 0;
while(numero <= 10){
    console.log("Numero: "+ numero);
    numero ++;
}*/

// Función para generar la tabla de multiplicar de un número dado
function generarTablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Llamada a la función con el número deseado
generarTablaMultiplicar(1);
