
//1. Dado el array = [1,2,3,4,5,6]

//Iterar por todos los elementos dentro de un array utilizando while 
//y mostrarlos en pantalla.
let numeros = [1, 2, 3, 4, 5, 6];
let i = 0
while (i <= numeros.length) {
    console.log(numeros[i])
    i++
}


//Iterar por todos los elementos dentro de un array
// utilizando for y mostrarlos en pantalla.
numeros = [1, 2, 3, 4, 5, 6];
for (let i = 0; i <= numeros.length; i++) {
    console.log(numeros[i])
}

//Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
numeros = [1, 2, 3, 4, 5, 6];
let summa;

for (let i = 1; i <= numeros.length; i++) {
    summa = numeros + i
    console.log(numeros[summa])
}



//Generar una copia de un array pero con todos los elementos incrementado en 1.
let array = {
    numero: 1,
    numero: 2,
    numero: 3,
    numero: 4,
    numero: 5,
    numero: 6,
    cumplir: function () {
        this.numero++;
    }
}
console.log(array["numero"])
array.cumplir()
console.log(array["numero"])
//Calcular la media de la suma total de sus elementos 
numeros = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
}
console.log(sum);
//2. Pediremos a través de un bluce 6 números al usuario que almacenaremos en un array
//Imprimeros por pantalla la longitud del array, 
let numbers = [4, 5, 6, 3, 8, 9];
console.log(numbers.length)
//el número más alto y el número más bajo



//Objetos:
//1. Crearemos un objeto coche que tendra las siguientes propiedades: 
//marca (String),
//modelo (String), 
//año de fabricación (Number), 
//velocidad (Number), 
//arrancado(Boolean)
//Para este objeto deberemos definir los siguientes métodos:
//alecerar(incrementa en 10 la velocidad),

let coche = {
    marca: " seat",
    modelo: " ibiza ",
    añoFabricacion: 2020,
    velocidad: 220,
    arrancado: true,
    acelerar: function () {
        this.velocidad += 10;
    }
}
console.log(coche["velocidad"])
coche.acelerar()
console.log(coche["velocidad"])
//parar(pone a 0 la velocidad),

coche = {
    marca: " seat",
    modelo: " ibiza ",
    añoFabricacion: 2020,
    velocidad: 220,
    arrancado: true,
    parar: function () {
        this.velocidad -= 220;
    }
}
console.log(coche["velocidad"])
coche.parar()
console.log(coche["velocidad"])
//arrancarApagar(arranca o apaga el motor)

coche = {
    marca: " seat",
    modelo: " ibiza ",
    añoFabricacion: 2020,
    velocidad: 220,
    arrancado: true,
    encender: function () {
        this.arrancado = "arranca o apaga el motor";
    }

}
console.log(coche["arrancado"])
coche.encender()
console.log(coche["arrancado"])
//2. Crearemos un objeto persona que tendra las siguientes propiedades:
//nombre (String),
//2 apellidos (Array),
//edad (Number),
// direccion (String)
//Añadiremos un método que imprima el siguiente mensaje por pantalla
//('¡Hola! Me llamo David Lopez Hernandez, tengo 22 años y vivo en C/Ave del Paraíso Nº7')

let datos = {
    nombre: "David",
    apellidos: ["Lopez Hernandez"],
    edad: 22,
    direccion: "C/Ave del Paraiso Nº7",

    imprimir: function () {
        console.log("Hola me llamo" + " " + this.nombre + " " + this.apellidos + "," + "tengo" + " " + this.edad + " " + "años." + "Vivo en" + " "
            + this.direccion)
    }
}
datos.imprimir();
console.log(datos[imprimir])






