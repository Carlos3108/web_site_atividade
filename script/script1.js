function calc() {
    event.preventDefault();
    var vCompras = parseFloat(document.getElementById("vCompras").value);
    var qParcelas = parseFloat(document.getElementById("qParcelas").value);
    var respostas = document.getElementById("respostas");

    if (qParcelas == 1) {
        respostas.innerHTML = "A 1° parcela tem 0% de juros: " + vCompras.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    } else {
        if (qParcelas == 2) {
            let juros = (vCompras/100)*3;
            let total = (vCompras + juros);
            respostas.innerHTML = "A 2° parcela tem 3% de juros: " + total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        } else {
            if (qParcelas == 4) {
                let juros = (vCompras/100)*7;
                let total = (vCompras + juros);
                respostas.innerHTML = "A 4° parcela tem 7% de juros: " + total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            } else {
                respostas.innerHTML = "Esse número de parcela não é valido!";
            }
        }
    }
}

document.getElementById("calcular").addEventListener("click", calc);