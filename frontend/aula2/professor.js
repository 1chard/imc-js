function calcularIMC(altura, peso) {
    return peso / (altura ** 2);
}

function classificarIMC(imc) {
    let categoria;

    if (imc < 18.5)
        categoria = "abaixo do peso"
    else if (imc < 25)
        categoria = "com peso ideal. <span style='color: blue;'>Parabéns!</span>"
    else if (imc < 30)
        categoria = "fortinho"
    else if (imc < 35)
        categoria = "com obesidade grau I"
    else if (imc < 40)
        categoria = "com obesidade grau II"
    else
        categoria = "com obesidade grau III, você vai morrer!!!"

    return categoria;
}

function campoValido() {
    return document.querySelector("form").reportValidity();
}

function showResult() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("quilo").value;
    const resultado = document.getElementById("resultado");

    if (campoValido()) {
        const imc = calcularIMC(altura, peso);

        resultado.innerHTML = nome + " seu IMC é " + imc.toFixed(1) +
            " e você está " + classificarIMC(imc) + ".";
    }
    else
        resultado.textContent = "preencafd";
}

function capturarEnter(evento){
    switch(evento.key){
        case "Enter":
            showResult();
        default:
            return;
    }
}

//eventos
document.getElementById("butao").addEventListener("click", showResult);
document.querySelector("form").addEventListener("keypress", capturarEnter)
