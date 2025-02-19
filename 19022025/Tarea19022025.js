//compara dos numeros
//para indicar que el dato es un entero
let dato1 = parseInt(prompt("Ingresa un numero:"));
let dato2 = parseInt(prompt("Ingresa otro numero: "));

if (dato1 > dato2){
    console.log("Dato 1 es mayor que el dato 2, el dato 1 es: " + dato1);
//"else if es para agregar otra condicion al if"
}else if(dato1 == dato2){
    console.log("El dato 1 es igual que el dato 2");
}else{
    console.log("El dato 2 es mayor que el dato 1, el dato 2 es: " + dato2);
}

/*
let comparacion = dato1 >= dato2;
console.log(comparacion);*/