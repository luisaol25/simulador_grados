function conversor(celsius){
    return (celsius * 1.8 + 32).toFixed(1)
}

let celsius
let celsiusNumero
let valida = false
while (valida === false) {


    celsius = prompt("Ingresa tu valor en grados celsius")
    celsiusNumero = parseInt(celsius)

    if (celsius === null){
        valida = true
    } else if (!isNaN(celsiusNumero)){
        alert ("el valor de tus grados en Fahrenheit es: " + conversor(celsiusNumero))
        valida = true
    } else {
        alert("debes ingresar un numero para que esto funcione bien")
    }
   
}





