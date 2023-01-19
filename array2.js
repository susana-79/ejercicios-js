//1. Dado un array que contiene ["azul", "amarillo", "rojo", 
//"verde", "café", "rosa"] determinar si un color introducido
// por el usuario a través de un prompt se encuentra dentro del array o no.

let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
let colorUsuario = prompt("Escribe color")
const incluido = colores.includes(colorUsuario);
console.log("array colores:", colores);
console.log("array colores:", incluido);

//2. Existen dos arrays, cada uno con 5 elementos,
// generar un nuevo array con la unión de ambos elementos,
// (Ejemplo: [1,2,3] unión [1,2,4] = [1,1,2,2,3,4])

let array1 = [1, 2, 3, 4, 5]
let array2 = [2, 6, 8, 5, 9]
let array3 = [...array1, ...array2];
const arra3 = array3.sort();
console.log(array3)
console.log(arra3)

//3. Crear una función que reciba un array y devuelva otro ordenado.
// La función tendrá dos parámetros el array que recibe
//y otro parámetro para determinar orden del array devuelto.

let numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

//4. Dado el array [1,2,3,4,5,6,7,8,9] volcar 
//los 3 últimos elementos en otro array.
let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const volcar = array4.splice(0, 6);
console.log(volcar);
console.log(array4);

//5. Pedimos al usuario 5 valores que guardaremos en un array,
// después extraeremos el primer elemento y lo mostraremos al usuario.

let array5 = [];
for (let i = 0; i < 5; i++) {
    let valor = (prompt("Escriba un valor:"));
    array5.push(valor);
    console.log(array5)
}
const extraer = array5.shift()
console.log(extraer)


//6. El usuario ingresa dos conjuntos de números separados por coma,
// el programa debe determinar si ambos conjuntos tienen
//la misma cantidad de números.

let array6 = prompt('Ingresa dos conjuntos de números separados por coma ').split(",");
let arra6 = prompt('Ingresa dos conjuntos de números separados por coma ').split(",");

if (array6.length===arra6.length){
    console.log("Los conjuntos son iguales")
    
}else{
    console.log("Los conjuntos no son iguales")
}




//7. El usuario ingresa dos conjuntos de números separados por coma,
// si ambos conjuntos tienen la misma cantidad de elementos
// mostrar un arreglo que contenga la suma de cada elemento.
// (Ejemplo: [1,2,3] + [2,3,4] = [3,5,7])


let array7 = prompt('Ingresar numeros separados por coma ').split(",");
let arr7 = prompt('Ingresar numeros separados por coma ').split(",");

console.log("array7", array7)
console.log("arr7", arr7)
if( array7.length===arr7.length){

    let sumaValores=[];
    for( let i=0; i<array7.length;i++){
        sumaValores.push(Number(array7[i]) + Number(arr7[i])); 
        
    }
    
   
    console.log("sumaValores",sumaValores)
}else{
    console.log("el resultado no es igual no se puede sumar")
}





//8. Existen dos arrays, cada uno con 5 elementos,
// generar un nuevo array con la intersección de ambos elementos.
// (Ejemplo: [1,2,3] unión [1,2,4] = [1,2])

let array8 = [1, 2, 3, 4, 5];
let arr8 = [6, 7, 8, 9, 1];
const arra8 = array8.filter(x => arr8.indexOf(x) !== -1)
console.log(arra8);

