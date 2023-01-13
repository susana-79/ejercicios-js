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
function geometrica(inicial,razón,numero){
    let resultado= inicial
    for(let i=0;i>=numero;i++){
        resultado*=razón
    }return resultado
}
console. log(geometrica(2,3,6))
//5.- Escribir un programa que calcule la suma de todos 
//los múltiplos de 5 menores de 100

//6.- Escribir un programa que nos cuente la cantidad
// de múltiplos de 5 menores de 100
let contador=0;
while(contador<100){
    if(contador%5==0)
    console.log(contador)
    contador++
} 