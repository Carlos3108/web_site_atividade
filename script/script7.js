function aliquota(){
    var salario = parseFloat(document.getElementById("salario").value);
    var calcaliq1 = salario - ((salario / 100) * 7.5);
    var calcaliq2 = salario - ((salario / 100) * 15);
    var calcaliq3 = salario - ((salario / 100) * 22.5);
    var calcaliq4 = salario - ((salario / 100) * 27.5);

    if (salario > 0 && salario <= 1434) {
        alert ("Seu salario não tem desconto: " + salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    } else if (salario > 1434 && salario <= 2150) {
        alert ("Seu salario com desconto é: " + calcaliq1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    } else if (salario > 2150 && salario <= 2866) {
        alert ("Seu salario com desconto é: " + calcaliq2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    } else if (salario > 2866 && salario <= 3582) {
        alert ("Seu salario com desconto é: " + calcaliq3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    } else if (salario > 3582) {
        alert ("Seu salario com desconto é: " + calcaliq4.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    } else {
        alert("Por favor digite um valor de salario valido!");
    }
}

document.getElementById("calcular").addEventListener("click", aliquota);