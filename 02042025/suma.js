document.getElementById('sumaForm').addEventListener('submit', 
    function(event){
       event.preventDefault(); // Prevent the form from submitting normally
       let numero1 = parseFloat(document.getElementById('num1').value);
       let numero2 = parseFloat(document.getElementById('num2').value);
       let resultado = numero1 + numero2;
         // Display the result in the console and in the HTML   
       console.log(resultado);
       document.getElementById('resultado').innerText = "La suma es: " + resultado;
    }

);