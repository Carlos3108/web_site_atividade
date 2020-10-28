function imc() {
    event.preventDefault();
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var sexo = document.getElementById("sexo").value;
    var IMC = peso/(altura*altura);
    

    if (sexo == "Masculino" || sexo == "M" || sexo == "m") {
        if (IMC > 0 && IMC <= 20.7) {
            alert ("Abaixo do peso, seu IMC: " + IMC.toFixed(1))
        } else if (IMC > 20.7 && IMC <= 26.4) {
            alert ("Seu peso está normal, seu IMC: " + IMC.toFixed(1))
        } else if (IMC > 26.4 && IMC <= 27.8) {
            alert ("Você está levemente acima do peso, seu IMC: " + IMC.toFixed(1))
        } else if (IMC > 27.8 && IMC <= 31.1) {
            alert ("Você está levemente acima do peso, seu IMC: " + IMC.toFixed(1))
        } else if (IMC > 31.1) {
            alert ("Você está obeso, seu IMC: " + IMC.toFixed(1))
        } else {
            alert ("Digite o seu peso corretamente")
        }
    } else if (sexo == "Feminino" || sexo == "F" || sexo == "f") {
        if (IMC > 0 && IMC <= 19.1) {
            alert ("Abaixo do peso, seu IMC: " + IMC.toFixed(1))
        } else if (IMC > 19.1 && IMC <= 25.8) {
            alert ("Seu peso está normal, seu IMC: " + IMC.toFixed(1))
        } else if (IMC > 25.8 && IMC <= 27.3) {
            alert ("Você está levemente acima do peso, seu IMC: " + IMC.toFixed(1))
        } else if (IMC > 27.3 && IMC <= 32.3) {
            alert ("Você está levemente acima do peso, seu IMC: " + IMC.toFixed(1))
        } else if (IMC > 32.3) {
            alert ("Você está obeso, seu IMC: " + IMC.toFixed(1))
        } else {
            alert ("Digite o seu peso corretamente")
        }
    }   else {
        alert ("Por favor, digite o sexo corretamente: M - Masculino ou F - Feminino!")
    }
}
document.getElementById("calcular").addEventListener("click", imc);