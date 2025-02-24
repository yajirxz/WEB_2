/*function(Argumentos){
    LN
}*/

//forma de llamar a una funcion
//no importa el orden en donde coloquemos la funcion
/*function saludar(){
    alert("Hola mundo");
}
saludar();*/

function saludar(nombre){
    return "Mi nombre es: " + nombre;
}
console.log(prompt("Ingresa tu nombre: "));
console.log