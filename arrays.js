//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.

//1
function array_suma(numeros){
    let suma = 0;
    for (let i = 0 ; i <numeros.length ; i++){
        suma += numeros[i];
    }
    return suma;
}

console.log(array_suma([1,2,3,4,5]));

//2

function array_promedio(numeros){
    let suma = array_suma(numeros);
    return suma / numeros.length;
}
console.log(array_promedio([1,2,3,4,5]));

//3
function array_stringM(Strings){
    let nuevo_array = [];
    for (let i = 0; i < Strings.length ; i++){
        nuevo_array.push(Strings[i].toUpperCase());
    }
    return nuevo_array;

}
console.log(array_stringM(["mejor" , "matias" , "fernandes"]));

//4
function filtro_pares(numero){
    let pares = [];
    for (let i = 0; i < numero.length ; i++){
        if (numero[i] % 2 === 0 ){
            pares.push(numero[i]);
        }
    }
    return pares;
}
console.log(filtro_pares([1,2,3,4,5,6]));
