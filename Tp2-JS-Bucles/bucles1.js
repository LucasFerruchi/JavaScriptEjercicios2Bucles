// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje 
//que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let age = parseInt( prompt("Ingrese su edad"));

//verificar si el numero ingresado es valido con isNaN, 
//como devuelve falso, si es numero lo q analiza, se agrega ! que invierte el valor a true

if(!isNaN(age)){
    if(age>=18){
        document.write("Puedes ingresar");
    }else{
        document.write("no puedes ingresar");
    }
}else{
    alert("Introduce un número válido");
}
