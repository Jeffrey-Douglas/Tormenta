//Alerta com um input de texto para o usuário.
//var valorEmDolarTexto = prompt("Qual o valor, em dolar, que será convertido?")
//alert(valorEmDolarTexto)
//Converte o número digitado no input anterior para um número com casa de decimal, ou seja, float.
//var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
//alert(valorEmDolarNumero)
//Converte o valor em dolar digitado anteriormente para valor em real.
//var valorEmReal = valorEmDolarNumero * 5.5
//Mostra apenas dois digitos após a vírgula.
//var valorEmRealDecimal = valorEmReal.toFixed(2)
//alert (valorEmRealDecimal)

function conversao(){
    var real = document.getElementById('valor').value
    if (real == '' || real <= 0){
      document.getElementById('valorReal').innerHTML = 'Por favor, digite um valor.'
   }
    else{
      var dolar = parseFloat(real) * 10
      var valorConvertido = dolar.toFixed(2)
      
      document.getElementById('valorReal').innerHTML = 'R$ ' + valorConvertido
    }
  }

/*
  se TL && TO == true valor * 10
  se TL && TP == true valor * 100
  se TO && TP == true valor * 10
  se TO && TL == true valor / 10
  se TP && TO == true valor / 10
  se TP && TL == true valor / 100
  */