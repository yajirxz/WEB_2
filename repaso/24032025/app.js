//inicializamos un arreglo para almacenar unas tareas
let tareas = [];

function mostrarMenu(){
    return parseInt(prompt(
        "opcione disponibles: \n" +
        "1. Agregar tarea \n" +
        "2. Ver las tareas \n" +
        "3. Marcar tarea como completada \n" +
        "4. Salir\n"+
        "Elige una opcion: "


    ));
}
//funcion para agregar una tarea
function agregarTarea(){
    let nombre = prompt("ingresa el nombre de la tarea");
    if(nombre){
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada!");
    }else{
        alert("Debes ingresar un nombre para la tarea");
    }
}
//funcion para ver las tareas
function verTareas(){
    if(tareas.length === 0){
        alert("No hay tareas registradas");
}else{
    let mensaje = "Lista de tareas: \n";
}}

//funcion para marcar una tarea como completada

function marcarTareaCompletada(){
    let numero = parseInt(prompt("ingresa el numero de la tarea que deseas marcar como completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero - 1].completada = true;
        alert('La tarea"${tareas[numero - 1].nombre}'ha sido marcada como completada');
    
    }else{
        alert("El numero ingresado no es valido");
}

//funcion priincipal para manejar el flujo del programa

function inciarPrograma(){
    let continuar 
}

//icnicar el programa

