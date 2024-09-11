//1. Imprimir en consola los números del 1 al 10.
//2. Imprimir en consola los números del 10 al 1.
//3. Imprimir en consola los números del 1 al 10 pero solo los pares.
//4. Imprimir en consola los números del 1 al 10 pero solo los impares.
//5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
//6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
//7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
//8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.

//1
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//2
console.log("Números del 10 al 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
//3
console.log("Números del 1 al 10 que son pares :");
for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0){ 
  console.log(i);
  }
}
//4
console.log("Números del 1 al 10 que son impares :");
for (let i = 1; i <= 10; i++) {
    if(i % 2 === 1){ 
  console.log(i);
  }
}
//5
console.log("Números del 1 al 10 que son multiplos de 3 :");
for (let i = 1; i <= 10; i++) {
    if(i % 3 === 0){ 
  console.log(i);
  }
}
//6
console.log("Números del 1 al 10 que son multiplos de 5 :");
for (let i = 1; i <= 10; i++) {
    if(i % 5 === 0){ 
  console.log(i);
  }
}
//7
console.log("Números del 1 al 10 que son multiplos de 3 y 5 :");
for (let i = 1; i <= 10; i++) {
    if(i % 3 === 0 && i % 5 === 0){ 
  console.log(i);
  }
}
//8
console.log("Números del 1 al 10 que son multiplos de 3 y 5 :");
for (let i = 1; i <= 10; i++) {
    if(i % 3 === 0 || i % 5 === 0){ 
  console.log(i);
  }
}