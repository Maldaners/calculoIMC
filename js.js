function obterImc() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value.replace(",", ".");
    let imc = peso / (altura * altura);

    if(!isNaN(peso) && !isNaN(altura)){
        if(imc < 18.5){
            document.getElementById("resultado").innerHTML = "IMC = " + imc + "<br/> Magreza,  imc é menor que 18,5 kg/m2";
        }else if (imc >= 18.5 && imc <= 24.9){
            document.getElementById("resultado").innerHTML = "IMC = " + imc + "<br/> Normal,  imc está entre 18,5 e 24,9 kg/m2";
        }else if (imc >= 25 && imc <= 30)
            document.getElementById("resultado").innerHTML = "IMC = " + imc + "<br/> Sobrepeso,  imc está entre 25 e 30 kg/m2";
        else if (imc > 30){
            document.getElementById("resultado").innerHTML = "IMC = " + imc + "<br/> Obesidade,  imc é maior que 30 kg/m2";
        }else{
            document.getElementById("resultado").innerHTML = " Digite números <b>válidos!</b>"; 
        }
    } else {
        document.getElementById("resultado").innerHTML = " Digite apenas <b>números!</b>"; 
    }
    return false;
}