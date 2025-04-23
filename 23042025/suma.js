//Funciones de la calculadora
//agregar un valor a la pantalla
function agregarPantalla(value){
    document.getElementById("pantalla").value+=value;
}
//limpiar la pantalla
function limpiarPantalla(){
    document.getElementById("pantalla").value="";
}
//calcular el resultado
function calcular(){
    try{
        let result = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = result;
    }catch{
        document.getElementById("pantalla").value = "Error";

    }
}