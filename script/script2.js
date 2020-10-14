function parImpar() {
    event.preventDefault();
    var numero = parseInt (document.getElementById("numero").value);
    var total = numero%2;
    if(total == 0){
        alert("Par");
    }else{
        alert("Impar");
    }   
}
document.getElementById("parImpar").addEventListener("click", parImpar);