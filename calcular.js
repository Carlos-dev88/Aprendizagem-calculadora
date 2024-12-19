function calcular() {
    // Pega os valores inseridos nos campos de entrada X e Y
    var x = document.getElementById("campoX").value;
    var y = document.getElementById("campoY").value;

    // Converte os valores de string para números
    x = parseFloat(x);
    y = parseFloat(y);

    // Realiza o cálculo. Neste caso, somamos X e Y.
    var resultado = x + y;

    // Exibe o resultado no campo de resultado
    document.getElementById("resultado").value = resultado;
}
