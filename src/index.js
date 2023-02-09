import sum from './sum.js';


const numero1 = document.getElementById("first-number");
const numero2 = document.getElementById("second-number");
const opera = document.querySelector(".operador");
const resultado = document.getElementById("result-sum");

function resultados (){
  const suma = (sum(numero1, numero2));
  resultado.innerHTML = suma;
    
}
opera.addEventListener("click",resultados)  
   



 