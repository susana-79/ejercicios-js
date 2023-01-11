let nombre;
nombreUsuario= prompt("Introduce tu nombre")
console.log(nombreUsuario)

if (nombreUsuario==="Ana"){
    console.log(" es correcto")
    
}
else{
    console.log("no es correcto")}



let precio;
precio= prompt("Introduce un precio") 
console.log (precio)


precio= Number(precio)
console.log (precio)
let iva= precio *0.21
console.log (iva)
if(iva>100){
    console.log ("El pago se puede fraccionar")
}