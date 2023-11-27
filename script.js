const numeros = [35];
const saldos = [35];
const alteracao = [35];

for(i = 0; i < 35; i++){
    numeros[i] = i + 1;
    saldos[i] = 30;
}

valorTurma = "";
turma = "";

saldoDaTurma = 0;

function pegaTurma(){
    valorTurma = document.getElementById("turma").value

    
    if(valorTurma == -1){
        turma = "5° ano A"
    }
    if(valorTurma == 0){
        turma = "5° ano B"
    }    
    if(valorTurma == 1){
        turma = "6° ano A"
    }
    if(valorTurma == 2){
        turma = "6° ano B"
    }

    if(valorTurma == 3){
        turma = "7° ano A"
    }
    if(valorTurma == 4){
        turma = "7° ano B"
    }

    if(valorTurma == 5){
        turma = "8° ano A"
    }
    if(valorTurma == 6){
        turma = "8° ano B"
    }

    if(valorTurma == 7){
        turma = "9° ano A"
    }
    if(valorTurma == 8){
        turma = "9° ano B"
    }

    if(valorTurma == 9){
        turma = "1° ano A - E.M."
    }
    if(valorTurma == 10){
        turma = "1° ano B - E.M."
    }

    if(valorTurma == 11){
        turma = "2° ano A - E.M."
    }
    if(valorTurma == 12){
        turma = "2° ano B - E.M."
    }

    if(valorTurma == 13){
        turma = "3° ano A - E.M."
    }
    if(valorTurma == 14){
        turma = "3° ano B - E.M."
    }

    if(valorTurma == 0){
        alert("Erro! Selecione uma turma!")
    }

    document.title = turma + " - Pontuações";
}

function VerResultados(){
    saldoDaTurma = 0;

    document.getElementById("1ao10").innerHTML = " "
    document.getElementById("11ao20").innerHTML = " "
    document.getElementById("21ao30").innerHTML = " "
    document.getElementById("31ao35").innerHTML = " "
    pegaTurma()

    document.getElementById("nomeTurma").innerHTML = "Turma: " + turma

    for(i = 0; i < 10; i++){
        if(alteracao[i] == true){
            document.getElementById("1ao10").innerHTML += "<strong>" + numeros[i] + " - M$" + saldos[i] + "</strong><br>"
            saldoDaTurma += saldos[i]
        }else{
            document.getElementById("1ao10").innerHTML += numeros[i] + " - M$" + saldos[i] + "<br>"
        }
    }

    for(i = 10; i < 20; i++){
        if(alteracao[i] == true){
            document.getElementById("11ao20").innerHTML += "<strong>" + numeros[i] + " - M$" + saldos[i] + "</strong><br>"
            saldoDaTurma += saldos[i]
        }else{
            document.getElementById("11ao20").innerHTML += numeros[i] + " - M$" + saldos[i] + "<br>"
        }
    }

    for(i = 20; i < 30; i++){
        if(alteracao[i] == true){
            document.getElementById("21ao30").innerHTML += "<strong>" + numeros[i] + " - M$" + saldos[i] + "</strong><br>"
            saldoDaTurma += saldos[i]
        }else{
            document.getElementById("21ao30").innerHTML += numeros[i] + " - M$" + saldos[i] + "<br>"
        }
    }

    for(i = 30; i < 35; i++){
        if(alteracao[i] == true){
            document.getElementById("31ao35").innerHTML += "<strong>" + numeros[i] + " - M$" + saldos[i] + "</strong><br>"
            saldoDaTurma += saldos[i]
        }else{
            document.getElementById("31ao35").innerHTML += numeros[i] + " - M$" + saldos[i] + "<br>"
        }
    }

    document.getElementById("totalDaTurma").innerHTML = "<b>Saldo da Turma: M$" + saldoDaTurma + "</b>"

    var vencedor = Math.max.apply(null, saldos);
    for(i = 0; i < 35; i++){
        if(saldos[i] == vencedor){
            document.getElementById("maiorPontuacao").innerHTML = "Maior Pontuador: Aluno " + numeros[i] + " - M$" + saldos[i];
        }
    }
}

function Multiplicacao(){
    chamada = parseFloat(document.getElementById("chamada").value);
    valor = parseFloat(document.getElementById("valor").value)
    aposta = parseFloat(document.getElementById("aposta").value)
    VerResultados()

    for(i = 0; i < 35; i++){
       if(chamada == numeros[i]){
            saldos[i] = saldos[i] - aposta;
            resultado = aposta * valor;
            saldos[i] = resultado + saldos[i];
            alteracao[i] = true;

            resultado = saldos[i];
            break;
       }
    }

    VerResultados()
    document.getElementById("turma2").innerHTML = turma
    document.getElementById("resultado").innerHTML = "Aluno " + chamada
    document.getElementById("saldo").innerHTML = "M$" + resultado
}

function PerdeTudo(){
    chamada = parseFloat(document.getElementById("chamada").value);
    valor = parseFloat(document.getElementById("valor").value)
    VerResultados()

    for(i = 0; i < 35; i++){
       if(chamada == numeros[i]){
            resultado = 0;
            saldos[i] = resultado;
            alteracao[i] = true;
            break;
       }
    }

    VerResultados()
    document.getElementById("turma2").innerHTML = turma
    document.getElementById("resultado").innerHTML = "Aluno " + chamada
    document.getElementById("saldo").innerHTML = "M$" + resultado
}