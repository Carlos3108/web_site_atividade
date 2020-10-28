function calcular() {
    event.preventDefault();
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var codigo = parseInt(document.getElementById("codigo").value);

    const ad = num1 + num2
    const sub = num1 - num2
    const mult = num1 * num2
    const div = num1 / num2

    switch (codigo) {
        case 1:
            alert(ad);
        break;
        case 2:
            alert(sub);
        break;
        case 3:
            alert(mult);
        break;
        case 4:
            alert(div);
        break;
        default:
            alert("Por favor, escolha o número de codigo de 1 a 4")
    }
}
document.getElementById("calcular").addEventListener("click", calcular)