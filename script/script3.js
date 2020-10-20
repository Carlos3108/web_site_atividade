function maiorIgual() {
    event.preventDefault();
    var n1 = parseInt (document.getElementById("numero1").value);
    var n2 = parseInt (document.getElementById("numero2").value);
    var respostas = document.getElementById("respostas");

    if ( n1 > n2 ) {
        respostas.innerHTML = "O maior número é: " + n1 + " e o menor é: " + n2;
    } else if ( n2 > n1) {
        respostas.innerHTML = "O maior número é: " + n2 + " e o menor é: " + n1;
    } else if (n1 == n2) {
        respostas.innerHTML = "Os números são iguais";
    } else {
        respostas.innerHTML = "Falta um número";
    }
}

document.getElementById("maiorIgual").addEventListener("click", maiorIgual);