// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456

let numrep = parseInt(prompt("Ingrese el numero de repeticiones entre 1 y 50"));
//verificar si se ingreso un numero
if (!isNaN(numrep)) {
    //verificar si el numero esta entre 1 y 50
    if (numrep >= 1 && numrep <= 50) {
        //Iniciamos el cíclo desde la posición 0 hasta el número indicado por el usuario
        for (let i = 0; i <= numrep; i++) {
            //Imprimo el caractér correspondiente a la posición de cada ciclo 
            for (let rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            //"Enter"
            document.write("<br>");
        }
    } else {
        alert("El número introducido no es válido");
    }
} else {
    alert("valor erroneo");
}

