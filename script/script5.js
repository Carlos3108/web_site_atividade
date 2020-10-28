function calcValor() {
    event.preventDefault();
    var vProduto = parseFloat(document.getElementById("vProduto").value);
    var codigo = parseInt(document.getElementById("codigo").value);
    const msg = "Por favor, escolha entre os numeros 1_ À vista, 2_Débito, 3_Crédito";

    switch (codigo) {
        case 1:
            aVista();
        break;
        case 2:
            debito();
        break;
        case 3:
            credito();
        break;
        default:
            alert(msg)
    }
    /*if (codigo == 1) {
        aVista()
    } else if (codigo == 2){
        debito()
    } else if (codigo == 3){
        credito()
    } else {
        alert(msg)
    }*/
    function aVista() {
        let desconto = (vProduto / 100) * 10;
        let total = (vProduto - desconto);
        return alert("O valor real do produto é: " + vProduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "\n" + "O valor a ser pago a vista é: R$ " + total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    function debito() {
        let juros = (vProduto / 100)*2;
        let total = (vProduto + juros);
        return alert("O valor real do produto é: " + vProduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "\n" + "O valor a ser pago no débito é: R$ " + total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }

    function credito() {
        let juros = (vProduto / 100)*7;
        let total = (vProduto + juros);
        return alert("O valor real do produto é: " + vProduto.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) + "\n" + "O valor a ser pago no crédito é: R$ " + total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));
    }
}

document.getElementById("vPagar").addEventListener("click", calcValor);