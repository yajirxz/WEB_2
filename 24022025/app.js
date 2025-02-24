let frutas = ["manzana", "pera", "palta", "mango"];
/*
console.log(frutas);

console.log(frutas.length);
console.log(frutas[2]);
console.log(frutas[15]);
*/

for(let i = 0; i<frutas.length; i++){
    console.log("Fruta "+ (i+1)+ ":"+ frutas[i]);

}

for(const fruta of frutas){
    console.log(fruta);
}

for(const fruta in frutas){
    console.log(fruta);
}