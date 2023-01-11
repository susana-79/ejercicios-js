//pedir numero usuario y mostrar tabla
let numero=prompt("Introduce un numero")
numero=Number(numero)

for( i=1; i<=10;i++){
console.log(numero +"x"+i+"="+numero*i)
}

numero=prompt("Introduce un numero")
numero=Number(numero)
let suma=0
for( i=1; i<=numero;i++){
    suma+=i
    console.log(suma)

}
//numero saber si es primo
numero=prompt("Introduce un numero")
numero=Number(numero)
// algorismo para saber es el numero es primo dividir entre todos los numero para saber si da exacto
let primo=true
for(let i=2; i<numero; i++){
    if(numero %i == 0){
        primo=false
    }
}
    if(primo){
        console.log(numero+ "es primo")
    }
    else{
        console.log(numero+ " no es primo")
    }



