//1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
//2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.

//1

const persona = {
    nombre: "francisco",
    edad: "21",
    genero: "masculino"
};
console.log("informacion de la persona");
console.log("nombre " +persona.nombre);
console.log("edad " +persona.edad);
console.log("genero " +persona.genero);

//2

const caja = {
    cuadernos: 5,
    lapices: 14,
    papel: 64,
    fotografias: 5,
    buen_estado: true
  };
  
  console.log("objetos totales en la caja ");
  console.log(caja);
  
  console.log("Propiedades del objeto en la caja caja y su tipo de dato:");
  console.log("Cuadernos " + caja.cuadernos + " (Tipo " + typeof caja.cuadernos + ")");
  console.log("Lápices " + caja.lapices + " (Tipo " + typeof caja.lapices + ")");
  console.log("Papel " + caja.papel + " (Tipo " + typeof caja.papel + ")");
  console.log("Fotografías " + caja.fotografias + " (Tipo " + typeof caja.fotografias + ")");
  console.log("buen estado: " + caja.buen_estado + " (Tipo " + typeof caja.buen_estado + ")");
  