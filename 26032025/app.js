let tareas = [];

function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles:\n" +
        "1. Agregar tarea\n" +
        "2. Ver tareas\n" +
        "3. Marcar tarea como completada\n" +
        "4. Salir"+
        "Ingrese el número de la opción deseada:"
    ));
}

function agregarTarea(){
    let nombre = prompt("Ingrese el nombre de la tarea: ");
    if(nombre){
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
    }else{
        alert("El nombre de la tarea no puede estar vacío");
    }

}

function marcarTareaCompletada(){
    let numero = parseInt(prompt("Ingrese el número de la tarea a marcar como completada: "));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero - 1].completada = true;
        alert(`La tarea: "${tareas[numero - 1].nombre}" marcada como completada.`);
    }else{
        alert("Número de tarea no válido");
    }
}

function iniciarPrograma(){

    let continuar = true;

    while(continuar){
      let opcion = mostrarMenu();
        switch(opcion){
          case 1:
            agregarTarea();
            break;
          case 2:
            verTareas();
            break;
          case 3:
            marcarTareaCompletada();
            break;
          case 4:
            console.log("Saliendo programa...");
            continuar = false;
            break;
          default:
            alert("Opción no válida, intente de nuevo");
            break;
        }                
    }
   alert("Programa finalizado");
}

//inicisalizar programa
