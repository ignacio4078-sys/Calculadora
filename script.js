//document.getElementById para obtener elementos por su id html
//esta funcion agrega valores a la pantalla de la calculadora
function agregar(valor){
    document.getElementById("pantalla").value += valor;
}

//esta funcion borra el contenido de la pantalla de la calculadora
function borrar(valor){
    document.getElementById("pantalla").value = "";

}

//esta funcion realiza el calculo de la operacion ingresada en la pantalla

function calcular(valor){
    const valorPantalla = document.getElementById("pantalla").value;
    const resultado = eval(valorPantalla);
    document.getElementById("pantalla").value = resultado;
}

//eval() evalua una cadena de texto (STRING) como si fuera codigo js y lo ejecuta