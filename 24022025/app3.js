//suma
function suma(n1, n2){
    return parseInt(n1)+parseInt(n2);
}

let numero1=prompt("Ingresa un numero:");
let numero2=prompt("ingresa otro numero:");

let resultado = suma(numero1,numero2);

console.log("El total de la suma es: "+resultado);
//resta
function resta(n1, n2){
    return parseInt(n1)-parseInt(n2);
}

let resultado2 = resta(numero1,numero2);
console.log("El total de la resta es: "+resultado2);

//multplicacion
function multplicacion(n1, n2){
    return parseInt(n1)*parseInt(n2);
}
let resultado3 = multplicacion(numero1,numero2);
console.log("El total de la multiplicacion es: "+resultado3);

//division
function division(n1, n2){
    return parseInt(n1)/parseInt(n2);
}
let resultado4 =division(numero1,numero2);
console.log("El total de la division es: "+resultado4);

