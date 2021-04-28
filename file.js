var select = document.getElementById('length');    

for (var i = 1; i<= 12; i++){

    var option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    select.options.add(option);
}

document.getElementById("idade").addEventListener("change", showConsole)
document.getElementById("length").addEventListener("change", showConsole)
document.getElementById("tipoplano").addEventListener("change", showConsole)


function showConsole(){
    let price = 0
    const tipoplano = document.getElementById("tipoplano").value
    const idade = document.getElementById("idade").value
    const mes = document.getElementById("length").value
    console.log(mes)

    var valorIdade = 0
    var valorPlano = 0
    var valorMes = 0
    if(idade == "idade1") price += 150
    if(idade == "idade2") price += 200
    if(idade == "idade3") price += 250
    if(idade == "idade4") price += 350
    if(tipoplano == "tipoplano1") price += 350
    if(tipoplano == "tipoplano2") price += 400
    if(tipoplano == "tipoplano3") price += 450
    if(tipoplano == "tipoplano4") price += 500
    if(tipoplano == "tipoplano5") price += 550
    for (var i = 1; i <= 12; i++){
        if (i == mes) price *= i
    }

    document.getElementById("price").innerHTML = price
}