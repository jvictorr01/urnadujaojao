function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

        if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
    candidatos();
}

function votar() {
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);

    var candidado = (valor1 *10) + valor2;
    if (sessionStorage.getItem(candidado) !== null) {
        votos = parseInt(sessionStorage.getItem(candidado)) + 1;
        sessionStorage.setItem(candidado, votos);
    } else {
        sessionStorage.setItem(candidado, 1);
        
    }
    alert("Confirmado o voto no candidato "+candidado)
    musica2.play()
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("candidato").innerHTML = "";
  
}

function resultado() {
    document.getElementById("resultado").innerHTML=""
    for(i=0;i<100;i++){
        if (sessionStorage.getItem(i) !== null) {
            //alert(i);
            document.getElementById("resultado").innerHTML += "O Candidado "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>";
        }
    }
}

function branco() {
    var valor1 = 0;
    var valor2 = 0;

    var branco = valor1 + valor2;
    if (sessionStorage.getItem(branco) !== null) {
        votos = parseInt(sessionStorage.getItem(branco)) + 1;
        sessionStorage.setItem(branco, votos);
    } else {
        sessionStorage.setItem(branco, 1);
    }
    alert("Você votou em branco! ")
    musica2.play()
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function candidatos(){
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);

    if (valor1 === 3 & valor2 === 3){
        document.getElementById("candidato").innerHTML= '<img src="./img/33.jpg" height="290px" max-width="300px">';
    } else if(valor1 === 1 & valor2 === 3){
        document.getElementById("candidato").innerHTML= '<img src="./img/13.jpg" height="290px" max-width="300px">';
    } else if(valor1 === 6 & valor2 === 9){
        document.getElementById("candidato").innerHTML= '<img src="./img/69.jpg" height="290px" max-width="300px">';
    } else if(valor1 === 2 & valor2 === 2){
        document.getElementById("candidato").innerHTML= '<img src="./img/22.jpg" height="290px" max-width="300px">';
    } else if(valor1 === 7 & valor2 === 1){
        document.getElementById("candidato").innerHTML= '<img src="./img/71.jpg" height="290px" max-width="300px">';
    } else {
        document.getElementById("candidato").innerHTML= ("Candidato não identificado");
    }
}   

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("candidato").innerHTML = "";
}




