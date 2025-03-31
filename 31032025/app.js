let inventario = [];

//Funcion para Mostrar Menu
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles:\n" +
        "1. Agregar producto\n" +
        "2. Mostrar productos\n" +
        "3. Buscar producto por nombre\n" +
        "4. Salir\n" +
        "Selecciona una opción:"
    ));
}


function inciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProductoPorNombre();
                break;
            case 4:
                continuar = false;
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida");
        }
    }
    alert ("Programa finalizado");
}
//Funcion para Agregar Productos

function agregarProducto(){
    let nombre = prompt("Ingrese el nombre del producto:");
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    
    if (cantidad > 0 && precio > 0){
        let producto = {
         nombre: nombre,
         cantidad: cantidad,
         precio: precio
        
        };
        inventario.push(producto);
        alert("Producto agregado correctamente");
    }else {
        alert("La cantidad y el precio deben ser mayores a cero.");
    }
}

function mostrarProductos(){
    if (inventario.length === 0){
        alert("No hay productos en el inventario.");
        
    }else{
        let mensaje = "Productos en el inventario:\n";
        for (let i=0; i < inventario.length; i++){
            mensaje += `Producto ${i + 1}.\n`  +
                        `Nombre: ${inventario[i].nombre}\n` +
                        `Cantidad: ${inventario[i].cantidad}\n` +   
                        `Precio: $${inventario[i].precio}\n` +
                        "------------------------------------------------------\n"
                        ;
        }
        alert(mensaje);
    }
    console.log(inventario);
}


inciarPrograma();

