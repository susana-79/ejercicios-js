//pedir dos numero usuario y decir cual es mayor

let num1 = prompt(" primer numero: ");
let num2 = prompt(" segundo numero: ");
num1 = Number(num1)
num2 = Number(num2)


if (num1 > num2) {
    alert(num1 + " Es el mayor.")
} else {
    alert(num2 + " Es el mayor.")
}
// Pedir 3 numero al usuario y decir cual es el mayor
let nume1 = prompt(" primer numero: ");
let nume2 = prompt(" segundo numero: ");
let nume3 = prompt(" tercer numero: ");
nume1 = Number(nume1)
nume2 = Number(nume2)
nume3 = Number(nume3)
if (nume1 > nume2 && nume1 > nume3) {
    document.write(nume1);
    alert(" Es el mayor.")
} else if (nume2 > nume3) {
    document.write(nume2);
    alert("  Es el mayor.")
} else {
    document.write(nume3);
    alert(" No Es el mayor.")
}


//- Pedir la edad al usuario y decir si es o no mayor de edad
let edad = prompt(" Edad que tienes ");
edad = Number(edad)
if (edad > 18) {
    console.log("es mayor de edad")

}
else {
    console.log(" no es mayor de edad")
}
//pedir al usuario un número inicial y una razón
let inicial = 1
let razon = 5
let serie = inicial * razon
while (serie < 100) {
    console.log(serie)
    serie *= razon
}
//Escribir un programa que calcule la suma de todos los múltiplos de 5 menores de 100
let numero = 0
for (let i = 5; i < numero; i++) {
    if (numero % i == 0)

        console.log(numero)
}


//Escribir un programa que nos cuente la cantidad de múltiplos de 5 menores de 100

let contador = 0;

while (contador < 100) {
    if (contador % 5 == 0) {
        console.log(contador)
    }
    contador++
}
//pedir al usuario un número nos cuente la cantidad de divisores de ese número menores de 100

let n1 = prompt("Escribe un número");
let divisor = 0
for (i = 0; i <= n1; i++) {
    divisor %= i
    console.log(divisor)

}

//Escribir un programa que le pida textos al usuario, los imprima por la consola, y acabe cuando el usuario escriba ‘FIN’

let texto = prompt("Escribe un texto");

console.log(texto)

// un programa que le pida números al usuario, los sume, y
//  acabe cuando el usuario escriba 0 y nos muestre la suma total de los
// números
var i = 0
do {
    var nu1 = (prompt("Escribe un numero.Escribe 0 para salir"));
    nu1 = parselnt(nu1);
    console.log(nu1);
    i = i + nu1;
}
while(nu1 != 0);
console.log(i);
