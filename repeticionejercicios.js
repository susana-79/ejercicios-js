 //1.- Pedir dos números al usuario y decir cual es el mayor.
 let num1 = Number(prompt("dame un numero"))
 let num2 = Number(prompt("dame otro numero"))
 function mayor(num1, num2) {
        if (num1 > num2) {
        return num1
     }
    else {
            return num2
     }
 }
 console.log(mayor(num1, num2))
//2.- Pedir tres números al usuario y decir cual es el mayor

 function mayor3(a, b, c) {
     if (a > b && a > c) {
        return a
     }
     if (b > c) {
         return b
     } else {
         return c
     }
 }
 console.log(mayor3(5, 4, 6))

 //3.- Pedir la edad al usuario y decir si es o no mayor de edad
 let edad = prompt("Dame tu Edad")
 edad = Number(edad)
 if (edad > 18) {
    alert("Eres mayor de edad.")
 } else {
     alert("No eres mayor de edad.")
 }
 console.log()

 //4.- Una progresión geométrica empieza con un número al que se le va
 //multiplicando otro, por ejemplo: Si empezamos por el 2 y la razón (el
 // número que se multiplica) es 3 la serie sería: 2,6,18,54….
 //Hagamos un programa que le pida al usuario un número inicial y una razón
 //y nos muestre todos los términos de esa razón geométrica menores de
 //100.
 function geometrica(inicial, razón, numero) {
     let resultado = inicial
     for (let i = 0; i >= numero; i++) {
         resultado *= razón
     } return resultado
 }
 console.log(geometrica(2, 3, 6))
 //5.- Escribir un programa que calcule la suma de todos 
 //los múltiplos de 5 menores de 100
 let contador = 0;
while (contador < 100) {
     if (contador % 5 == 0)
        console.log(contador)

     contador++
 }
 console.log(contador)

 //6.- Escribir un programa que nos cuente la cantidad
 // de múltiplos de 5 menores de 100
 let inicial = 1
 let multiplo = 5
 let serie = inicial * multiplo
 while (serie < 100) {
    console.log(serie)
     serie *= multiplo
 }

 //7.- Pedimos dos números al usuario y le decimos si los dos tienen la
 //misma paridad (o sea, si los dos son pares o los dos son impares) o
 //diferente.
 let numero = Number(prompt("dame un numero"))
 let numero1 = Number(prompt("dame otro numero"))


 if (numero% 2===0 && numero1% 2===0) {

     alert("los dos son pares");

 } else if(numero% 2!==0&& numero1% 2!==0){

    alert("los dos son impares");

 }else{
    alert("Una es par ,el otro impar")
 }

//8.- Escribir un programa que le pida textos al usuario, los imprima por la consola,
// y acabe cuando el usuario escriba ‘FIN’
let texto = ""
let fin = "fin"

while (texto != fin){
texto = (prompt("Escribe textos.Cuando escribas Fin imprime"));
console.log(texto);
}


//9.- Escribir un programa que le pida números al usuario, los sume, y
//acabe cuando el usuario escriba 0 y nos muestre la suma total de los
//números

let nu1 = 0
let i = 0
do {
    nu1 = (prompt("Escribe un numero.Escribe 0 para salir"));
    nu1 = Number(nu1);
    console.log(nu1);
    i = i + nu1;

}
while (nu1 != 0);
console.log(i);

//10.- Escribir un programa que nos muestre lo siguiente:

//1

//22

//333

//4444

//55555
function repetirNumero(numero) {
    let resultado = ""
    for (let i = 1; i <= numero; i++) {
        resultado += numero
    }
    return resultado
}
function arbolNumerico(numero) {
    let resultado = ""
    for (let i = 1; i <= numero; i++) {
        resultado += repetirNumero(i) + "\r\n"
    } return resultado
}
let arbol = arbolNumerico(5)
console.log(arbol)