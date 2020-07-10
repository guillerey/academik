function calcular() {
    const price = parseInt(document.getElementById("price").value);
    let units = parseInt(document.getElementById("units").value);

    mostrarResultados(`El calculo de ${price} por ${units} es: ${price * units}`);
}

function mostrarResultados(resultado) {
    console.log(resultado);
    alert(resultado);
    document.getElementById("resultado").innerText = resultado;

}

function evaluateNumber() {
    let number = parseInt(document.getElementById('number-if-else').value);
    if (number <=100 ===0) {
        alert("El número ingresado es par");
    } else {
        alert("El número ingresado es impar");
    }
}
