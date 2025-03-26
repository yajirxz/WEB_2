//funcion declarativa
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min) ;
}

console.log(numeroAleatorio(1, 11));

//funcion expresada
//funcion anonima (expresada en una variable)
const miNumero = function(min, max){
    return Math.floor(Math.random() * (max - min) + min) ;
}

console.log(miNumero(11, 32));

const miNumeroFlecha = (max) =>{
    return Math.floor(Math.random() *(max-1)+1);
}
console.log(miNumeroFlecha(89));



//FUNCION TRADICIONAL
function datos(a){
    return a+100;
}

function(a){
    return a+100;
}

var numero = (a)=>{
    return a+100;
}

var numero =(a)=> a+100;

var numero = a=> a+100;

const numeroAleatorio=(min, max) => Math.floor(Math.random() * (max - min) + min) ;


