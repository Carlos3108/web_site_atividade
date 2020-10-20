function parImpar() {
    event.preventDefault();
    var numero = parseInt (document.getElementById("numero").value);
    var total = numero%2;
    
    if(document.getElementById("numero").value == ""){
        alert("Coloque um número inteiro")
    } else if(total == 0){
        alert("Par");
    }else{
        alert("Impar");
    }

}
document.getElementById("parImpar").addEventListener("click", parImpar);