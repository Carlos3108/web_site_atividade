function aproRepr() {
    event.preventDefault();
    var n1 = parseFloat (document.getElementById("nota1").value);
    var n2 = parseFloat (document.getElementById("nota2").value);
    var n3 = parseFloat (document.getElementById("nota3").value);
    var resp = document.getElementById("respostas");
    var media = (n1 + n2 + n3) / 3;

    if (n1 > 10) {
        alert("Por favor utilize os valores de 0 a 10");
    }else if (n2 > 10){
        alert("Por favor utilize os valores de 0 a 10");
    }else if (n3 > 10) {
        alert("Por favor utilize os valores de 0 a 10");
    }else if (n1 < 0){
        alert("Por favor utilize os valores de 0 a 10");
    }else if (n2 < 0) {
        alert("Por favor utilize os valores de 0 a 10");
    }else if (n3 < 0) {
        alert("Por favor utilize os valores de 0 a 10");
    }else if (media >= 6){
        resp.innerHTML = "Sua media foi: " + media.toFixed(2) + ". Parabéns, você foi APROVADO!";
    }else if (media >= 3 & media < 6){
        resp.innerHTML = "Sua media foi: " + media.toFixed(2) + ". Você ficou de exame.";
    }else if (media <= 6){
        resp.innerHTML = "Sua media foi: " + media.toFixed(2) + ". Infelizmente você foi reprovado.";
    }   
}

document.getElementById("aproRepr").addEventListener("click", aproRepr);