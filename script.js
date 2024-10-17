const name = document.getElementById("name");
const wight = document.getElementById("weight");
const heigth = document.getElementById("heigth");


function calcularImc() {
    let imc = wight.value / (heigth.value * heigth.value);
    let mensagemMagro = name.value + (", o seu IMC é " + imc.toFixed(1) + (" e você esta abaixo do peso ideal"));
    let mensagemNormal = name.value + (", o seu IMC é " + imc.toFixed(1) + (" e você esta com o peso ideal"));
    let mensagemSobrepeso = name.value + (", o seu IMC é " + imc.toFixed(1) + (" e você esta acima do peso ideal"));
    if (imc < 18.5) {
        alert(mensagemMagro)
    }
    else if (imc >= 18.5 && imc <= 24.9){
        alert(mensagemNormal)
    }

    else{
        alert(mensagemSobrepeso)
    }
}