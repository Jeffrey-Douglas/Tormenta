{
    // Avisos na tela
    let valorConvertido = document.getElementById("valorConvertido");
    let aviso = document.querySelector("#aviso");
  
    // para armazenar o valor do name do radio para passar pro switch
    let moedaEstrangeira = "";
  
    function Converter() {
      // Valor digitado no campo do input
      let valorElement = document.getElementById("valor").value;
  
      if (valorElement == 0 || valorElement === null || valorElement === "") {
        aviso.innerHTML = `O CAMPO ESTA VAZIO!!!`;
        aviso.style.color = "red";
        aviso.style.display = "block";
      } else {
        verificaMoeda();
  
        // Usa o switch dessa função passando o valor do element pro valor em real
        calculoConversaoMoeda(valorElement);
      }
    }
  
    function verificaMoeda() {
      // selecionar os elementos radios (criar um array deles)
      let moedaSelecionada = document.getElementsByName("moedaEstrangeira");
  
      // VERIFICAR QUAL BOTAO RADIO ESTA MARCADO checked ou checked == true
      // vincular a verificacao a um evento, click no botao Converter
      for (let i = 0; i < moedaSelecionada.length; i++) {
        if (moedaSelecionada[i].checked) {
          moedaEstrangeira = moedaSelecionada[i].value;
        }
      }
    }
  
    function calculoConversaoMoeda(valorElement) {
      let valorDaPlatina = 10;
      let valorDaPrata = 10;
      let valorDoCobre = 100;
  
      // Valor do real em float que foi passado no campo input
      let valorEmReal = parseFloat(valorElement);
  
      // Resultado da moeda real * moeda estrangeira por exemplo: valorEmReal * valorDoDolar
      let moedaConvertida;

      // CONVERSAO DE MOEDAS
      // Operacao basica pegar moedaEstrangeira e dividir pelo valorEmReal
      
      switch (moedaEstrangeira) {
        case "Platina":
          moedaConvertida = valorEmReal / valorDaPlatina;
          mensagemFormatada(
            `<span class="platina"> ${moedaConvertida}</span>` + '<span class="platina"> TL</span>',
            valorEmReal,
          );
          break;
  
        case "Prata":
          moedaConvertida = valorEmReal * valorDaPrata;
          mensagemFormatada(
            `<span class="prata"> ${moedaConvertida}</span>` + '<span class="prata"> TP</span>',
            valorEmReal,
          );
          break;
  
        case "Cobre":
          moedaConvertida = valorEmReal * valorDoCobre;
          mensagemFormatada(
            `<span class="cobre"> ${moedaConvertida}</span>` + '<span class="cobre"> T$</span>',
            valorEmReal,
          );
          break;
  
        default:
          aviso.textContent = "Escolha uma moeda estrangeira";
          aviso.style.color = "red";
          aviso.style.display = "block";
      }
    }
  
    // MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
    function mensagemFormatada(moedaConvertida, valorEmReal) {

      valorConvertido.innerHTML = 
      
        `<span style="color: #ffd700"> ${valorEmReal}</span> <span style="color: #ffd700;"> TO</span> convertido em ${moedaEstrangeira} é ${moedaConvertida}`;

        
      valorConvertido.style.color = "gray"
      valorConvertido.style.display = "block";
      aviso.style.display = "none";
    }
  
    function Limpar() {
      let valorElementForm = document.getElementById("form");
      valorElementForm.reset();
      valorConvertido.style.display = "none";
      aviso.style.display = "none";
      moedaEstrangeira = "";
    }
  }
  