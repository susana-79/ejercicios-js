//1. Dado un array que contiene ["azul", "amarillo", "rojo", 
//"verde", "café", "rosa"] determinar si un color introducido
// por el usuario a través de un prompt se encuentra dentro del array o no.
  
let colores =["azul", "amarillo", "rojo","verde", "café", "rosa"];
 let colorUsuario=prompt("Escribe color")
const incluido=colores.includes(colorUsuario);
 console.log("array colores:" ,colores);
 console.log("array colores:" ,incluido);

//2. Existen dos arrays, cada uno con 5 elementos,
// generar un nuevo array con la unión de ambos elementos,
// (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4])
let array1=["1,2,3,4,5"];
let array2=["2,6,7,8,9"];
let array3=[...array1,...array2]

console.log(array3)


//3. Crear una función que reciba un array y devuelva otro ordenado.
// La función tendrá dos parámetros el array que recibe
 //y otro parámetro para determinar orden del array devuelto.



 //4. Dado el array [1,2,3,4,5,6,7,8,9] volcar 
 //los 3 últimos elementos en otro array.


 //5. Pedimos al usuario 5 valores que guardaremos en un array,
 // después extraeremos el primer elemento y lo mostraremos al usuario.


 //6. El usuario ingresa dos conjuntos de números separados por coma,
 // el programa debe determinar si ambos conjuntos tienen
  //la misma cantidad de números.


  //7. El usuario ingresa dos conjuntos de números separados por coma,
  // si ambos conjuntos tienen la misma cantidad de elementos
  // mostrar un arreglo que contenga la suma de cada elemento.
  // (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])

  //8. Existen dos arrays, cada uno con 5 elementos,
  // generar un nuevo array con la intersección de ambos elementos.
  // (Ejemplo: [1,2,3] unión [1,2,4] = [1,2])


