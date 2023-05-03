function calcular(){
    var peso = parseFloat(document.querySelector('#peso').value)
    var altura = parseFloat(document.querySelector('#altura').value)

    var imc = peso / (altura * altura)

    document.querySelector(".resultado").innerHTML = `O seu IMC é ${imc.toFixed(2)}`;
}