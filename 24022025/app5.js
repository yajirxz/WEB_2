/*
var estado = true;

if(estado){
    var estado = false;
}
console.log(estado);         //va a imprimir false pq es global
*/

let estado = true;

if(estado){
    let estado = false;
    console.log(estado);       
}
console.log(estado);        //va a imprimir true pq es local y no global

