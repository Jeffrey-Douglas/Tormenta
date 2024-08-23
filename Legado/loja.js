//uma tentativa frustada porem, eu volto nela um dia

// var tbodycacl = document.getElementById("tbodycacl");

// var itens = [
// ["Adaga", "2 TO", "1d4", "19-20", "3 m", "0,5 kg", "Perfuração"],
// ["Ataque desarmado", "—", "1d3", "x2", "—", "—", "Esmagamento"],
// ["Espada curta",	"10 TO",	"1d6",	"19-20",	"—",	"1 kg",	"Perfuração"],
// ["Manopla",	"5 TO",	"1d4",	"x2",	"—",	"1 kg",	"Esmagamento"]
// ];

// for (var i = 0; i < itens.length; i++) {
// var tr = "<tr>" +
// "<td class='nomearma'>" + itens[i][0] + "</td>" +
// "<td class='nomearma'>" + itens[i][1] + "</td>" +
// "<td class='nomearma'>" + itens[i][2] + "</td>" +
// "<td class='nomearma'>" + itens[i][3] + "</td>" +
// "<td class='nomearma'>" + itens[i][4] + "</td>" +
// "<td class='nomearma'>" + itens[i][5] + "</td>" +
// "<td class='nomearma'>" + itens[i][6] + "</td>" +
// "</tr>";
// tbodycacl.innerHTML += tr;

// }

// var tbodycacum = document.getElementById("tbodycacum");

// var cacum = [
// ["Clava",	"—",	"1d6",	"x2",	"—",	"1,5 kg",	"Esmagamento"],			
// ["Lança",	"2 TO",	"1d6",	"x2",	"6m",	"1,5 kg",	"Perfuração"],			
// ["Maça",	"12 TO",	"1d8",	"x2",	"—",	"6 kg",	"Esmagamento"	]
// ];

// for (var i = 0; i < cacum.length; i++) {
// var tr = "<tr>" +
// "<td class='nomearma'>" + cacum[i][0] + "</td>" +
// "<td class='nomearma'>" + cacum[i][1] + "</td>" +
// "<td class='nomearma'>" + cacum[i][2] + "</td>" +
// "<td class='nomearma'>" + cacum[i][3] + "</td>" +
// "<td class='nomearma'>" + cacum[i][4] + "</td>" +
// "<td class='nomearma'>" + cacum[i][5] + "</td>" +
// "<td class='nomearma'>" + cacum[i][6] + "</td>" +
// "</tr>";
// tbodycacum.innerHTML += tr;

// }

// document.getElementById("txtBusca").addEventListener("keyup", function() {

// var busca = document.getElementById("txtBusca").value.toLowerCase();

// for (var i = 0; i < tbodycacl.childNodes.length; i++) { //Acessa as linhas
//   var achou = false;
//   var tr = tbodycacl.childNodes[i];
//   var td = tr.childNodes;

//   for (var j = 0; j < td.length; j++) { //Acessa as colunas
//     var value = td[j].childNodes[0].nodeValue.toLocaleLowerCase();
    
//     if (value.indexOf(busca) >= 0) {
//       achou = true;
//     }
//   }
// }
// });

// $(document).ready(function(){

//     $('a#botaoexpandirdescricaomarcial').click(function()
//           {
//             $(this).find('span').text(function(_, value) 
//             {
//             return value == '-' ? '+' : '-'
//             });
//             $('th.showb').slideToggle();
//           });
//   });
  
//   $(document).ready(function(){
//           $('a#botaoexpandirdescricao').click(function()
//           {
//             $(this).find('span').text(function(_, value) {
//         return value == '-' ? '+' : '-'
//       });
//             $('th.show').slideToggle();
//           });
  
  
//           $('a#show_2').click(function() {
//       $(this).find('span').text(function(_, value) {
//         return value == '-' ? '+' : '-'
//       });
      
//       $('tr.mostracima').slideToggle(100);
//     });
  
  
  
//           // $('a#show_2').click(function()
//           // {
//           //   $('tr.mostra').slideToggle("slow");
//           // });
//        }
//        );
//          $("a[id^=show_]").click(function() 
//           {
            
//             $("#extra_" + $(this).attr('id').substr(5)).slideToggle("slow");
//             $(this).find('span').text(function(_, value) {
//         return value == '-' ? '+' : '-'
//       });
//           });
   