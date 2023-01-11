let cantidad;
cantidad= prompt("Introduce una cantidad")
console.log(cantidad)
cantidad= Number(cantidad)
console.log (cantidad)
if(cantidad>=100&& cantidad<=200){
    console.log ("Llegara en tres días")
}
let usuario;
usuario=prompt("Introduce tu usuario")
console.log(usuario)
let pass;
pass=prompt("Introduce tu contraseña")
console.log(pass)
if(usuario==="ana"&&pass==="1223"||usuario==="juan"&&pass==="1234"){
    console.log ("Accesso correcto") 
}
else{
    console.log("Accesso no correcto")}