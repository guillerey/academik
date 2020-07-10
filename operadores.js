function suma() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    Resultado('La suma de ' + numero1 + numero2);
}

function mostrarResultados(resultado) {
    console.log(resultado);
    alert(resultado);
    document.getElementById("resultado").innerText = resultado;
}