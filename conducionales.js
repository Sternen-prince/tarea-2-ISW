//1. Imprimir en consola el número mayor de los tres.
//2. Imprimir en consola el número menor de los tres.
//3. Imprimir en consola si el numero1 es par o impar.
//4. Imprimir en consola si el numero2 es par o impar.
//5. Imprimir en consola si el numero3 es par o impar.
//6. Imprimir en consola si el numero1 es múltiplo de 5.
//7. Imprimir en consola si el numero2 es múltiplo de 5.
//8. Imprimir en consola si el numero3 es múltiplo de 5.

const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

//1
if(numero1>=numero2 && numero1>=numero3){
    console.log("el numero mayor es el " +numero1);
}else if (numero2>=numero1 && numero2>=numero3){
    console.log("el numero mayor es el " +numero2);
}else{
    console.log("el numero mayor es el " +numero3);
}
//2
if(numero1<=numero2 && numero1<=numero3){
    console.log("el numero menor es el " +numero1);
}else if (numero2<=numero1 && numero2<=numero3){
    console.log("el numero menor es el " +numero2);
}else{
    console.log("el numero menor es el " +numero3);
}

//3
if (numero1 %2 === 0){
    console.log("el numero1 es par");
}else {
    console.log("el numero1 es impar");
}
//4
if (numero2 %2 === 0){
    console.log("el numero2 es par");
}else {
    console.log("el numero2 es impar");
}
//5
if (numero3 %2 === 0){
    console.log("el numero3 es par");
}else {
    console.log("el numero3 es impar");
}
//6
if (numero1 %5 === 0){
    console.log("el numero1 es multiplo de 5");
}else {
    console.log("el numero1 es no es multiplo de 5");
}
//7
if (numero2 %5 === 0){
    console.log("el numero2 es multiplo de 5");
}else {
    console.log("el numero2 es no es multiplo de 5");
}
//8
if (numero3 %5 === 0){
    console.log("el numero3 es multiplo de 5");
}else {
    console.log("el numero3 es no es multiplo de 5");
}