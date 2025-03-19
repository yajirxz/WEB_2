/*var micarro = new Object();
micarro.marca = "Ford";
micarro.modelo = "Fiesta";
micarro.ano = 2010;
*/

//Otra forma de crear objetos
//objeto literal
/*var micarro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    ano: 2013
}; //siempre terminar en punto y coma

console.log(micarro.marca);*/


const gato = {
    nombre: 'kikis',
    duerme: true,
    edad: 11,
    enemigos: ['perros', 'ratones']
};
/*
console.log(gato.enemigos[1]);
console.log(gato.nombre);*/

//console.log(gato['nombre']);
gato.color = "manachado";
console.log(gato.color);
console.log(gato);
gato.edad = 12;
console.log(gato.edad);
delete gato.duerme;
console.log(gato);