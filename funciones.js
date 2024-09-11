//1. Crea una función que reciba un string y retorne el string en mayúsculas.
//2. Crea una función que reciba un string y retorne el string en minúsculas.
//3. Crear una función que reciba como parámetro 2 números y los reste.
//4. Crear una función que reciba como parámetro 2 números y los divida.
//5. Crear una función que reciba como parámetro 2 números y los multiplique.
//6. Crear una función que reciba un string y devuelva la longitud del string.

//1
function convertir_mayuscula(str){
   return str.toUpperCase(); 
} 
console.log(convertir_mayuscula("hola"));

//2
function convertir_minuscula(str){
    return str.toLowerCase(); 
 } 
 console.log(convertir_minuscula("VOY A IR "));

 //3

 function restar_numeros(num1 , num2){
    return num1 - num2;
 }
 console.log(restar_numeros(20 , 7));

 //4
 function dividir_numeros(num1 , num2){
    return num1 / num2;
 }
 console.log(dividir_numeros(20 , 7));

 //5
 function multiplicar_numeros(num1 , num2){
    return num1 * num2;
 }
 console.log(multiplicar_numeros(20 , 7));

 //6

 function obtener_longitud(str){
    return str.length;
 }
 console.log(obtener_longitud("hola"));