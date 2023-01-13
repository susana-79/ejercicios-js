// Hacer una función a la que le pasemos un número y 
//nos devuelva la suma desde uno hasta ese número
//sumatorio(5)-->1+2+3+4+5=15



function suma(numero){
    let resultado=""
    for(let i=0;i<numero;i++){
        if(numero+i){
            resultado+=i+numero}
            return resultado 
        }
    }

console.log(suma(1))
console.log(suma(2))
console.log(suma(3))
console.log(suma(4))
console.log(suma(5))
//Hacer una función a la que le pasemos un nombre y una edad y nos
//devuelva un saludo y si es o no mayor de edad
//portero('Eva',19)-->'Hola Eva, eres mayor de edad, puedes pasar'
//portero('Ana',13)-->'Hola Ana, eres menor de edad, no puedes pasar'


function saludo (nombre,edad){
    if(edad<18){
        return"Hola"  +nombre+ " eres menor de edad, no puedes pasar"
    }
    else{
        return"Hola" +nombre+ "  eres mayor de edad, puedes pasar"
    }
}
  console.log(saludo("Ana",13))  
    
  console.log(saludo("Eva",20)) 
//Hacer una función a la que le pasemos tres números y nos devuelva el del medio
//medio(1,2,3)->2
//medio(8,1,90)->8
 function numero(a,b,c){
    if(a<b && b<c ){
        return b
    }
    if(b>c&& c>a){
        return c
    }
    else{
        return a
    }
  }
  console.log(numero(1,2,3))
  console.log(numero(8,1,90))



