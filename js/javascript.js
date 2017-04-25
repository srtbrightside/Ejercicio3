function convertirCelsius(grados) {
    var cel = document.getElementById("fahrenheit").value;
    var operacion = (cel*(9/5))+32;
var resultado = document.getElementById("Calcular").value = Math.round(operacion);

}
