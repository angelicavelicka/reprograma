function validaemail() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    if (email == "velicka.angelica@gmail.com" && senha == "123"){
        alert("Bem Vindo!");
    }
    else{
        alert("Dados incorretos, esqueceu sua senha?")
    }
}
