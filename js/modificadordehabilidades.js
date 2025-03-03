// function modificadorHabilidades () {

//     let valorForca = document.getElementById("valorPontosFor").value;
//     let modForca = Math.floor((valorForca-10)/2);
//     let resultadoModForca = document.getElementById("modFor").innerText = modForca

//     let valorDestreza = document.getElementById("valorPontosDes").value;
//     let modDestreza = Math.floor((valorDestreza-10)/2);
//     let resultadoModDestreza = document.getElementById("modDes").innerText = modDestreza

//     let valorConstituicao = document.getElementById("valorPontosCon").value;
//     let modConstituicao = Math.floor((valorConstituicao-10)/2);
//     let resultadoModConstituicao = document.getElementById("modCon").innerText = modConstituicao

//     let valorInteligencia = document.getElementById("valorPontosInt").value;
//     let modInteligencia = Math.floor((valorInteligencia-10)/2);
//     let resultadoModInteligencia = document.getElementById("modInt").innerText = modInteligencia

//     let valorSabedoria = document.getElementById("valorPontosSab").value;
//     let modSabedoria = Math.floor((valorSabedoria-10)/2);
//     let resultadoModSabedoria = document.getElementById("modSab").innerText = modSabedoria

//     let valorCarisma = document.getElementById("valorPontosCar").value;
//     let modCarisma = Math.floor((valorCarisma-10)/2);
//     let resultadoModCarisma = document.getElementById("modCar").innerText = modCarisma

// }
//     let graduacao = 3 * 1
// function pericia() {
//     let nv = document.getElementById("nivel").value * 1

    
//     let treinadoAcro = document.getElementById("treinadoAcro")
//     let isTreinadoAcro = treinadoAcro.checked; 
//     if (isTreinadoAcro == true) {
//         contaPorNivel = ( nv + graduacao + resultadoModCarisma)
//     }
//     else {
//         contaPorNivel = Math.floor(nv/2)
//     }

//     let resultadoAcro = document.getElementById("periciaAcro").innerText = contaPorNivel
    

//     let treinadoAdes = document.getElementById("treinadoAdes")
//     let isTreinadoAdes = treinadoAdes.checked; 
//     if (isTreinadoAdes == true) {
//         contaPorNivel = ( nv + graduacao )
//     }
//     else {
//         contaPorNivel = Math.floor(nv/2)
//     }

//     let resultadoAdes = document.getElementById("periciaAdes").innerText = contaPorNivel
// }


let graduacao = 3; // Proficiency Bonus

function modificadorHabilidades () {
    
    let valorForca = document.getElementById("valorPontosFor").value;
    let modForca = Math.floor((valorForca - 10) / 2);
    document.getElementById("modFor").innerText = modForca;

    let valorDestreza = document.getElementById("valorPontosDes").value;
    let modDestreza = Math.floor((valorDestreza - 10) / 2);
    document.getElementById("modDes").innerText = modDestreza;

    let valorConstituicao = document.getElementById("valorPontosCon").value;
    let modConstituicao = Math.floor((valorConstituicao - 10) / 2);
    document.getElementById("modCon").innerText = modConstituicao;

    let valorInteligencia = document.getElementById("valorPontosInt").value;
    let modInteligencia = Math.floor((valorInteligencia - 10) / 2);
    document.getElementById("modInt").innerText = modInteligencia;

    let valorSabedoria = document.getElementById("valorPontosSab").value;
    let modSabedoria = Math.floor((valorSabedoria - 10) / 2);
    document.getElementById("modSab").innerText = modSabedoria;

    let valorCarisma = document.getElementById("valorPontosCar").value;
    let modCarisma = Math.floor((valorCarisma - 10) / 2);
    document.getElementById("modCar").innerText = modCarisma;
}

function pericia() {
    let nv = document.getElementById("nivel").value * 1;

    // Acrobacia (Acro)
    // let treinadoAcro = document.getElementById("treinadoAcro").checked;
    // let modAcro = Math.floor((document.getElementById("modDes").innerText * 1));
    // let contaPorNivelAcro = 0;
    
    // if (treinadoAcro) {
    //     contaPorNivelAcro = nv + graduacao + modAcro;
    // } else {
    //     contaPorNivelAcro = Math.floor(nv / 2) + modAcro;
    // }
    // document.getElementById("periciaAcro").innerText = contaPorNivelAcro;
    
    // // Adestramento (Ades)
    // let treinadoAdes = document.getElementById("treinadoAdes").checked;
    // let modAdes = Math.floor((document.getElementById("modCar").innerText * 1));
    // let contaPorNivelAdes = 0;

    // if (treinadoAdes) {
    //     contaPorNivelAdes = nv + graduacao + modAdes;
    // } else {
    //     contaPorNivelAdes = Math.floor(nv / 2) + modAdes;
    // }
    // document.getElementById("periciaAdes").innerText = contaPorNivelAdes;

    // Acrobacia (Destreza)
    let treinadoAcro = document.getElementById("treinadoAcro").checked;
    let modAcro = Math.floor((document.getElementById("modDes").innerText * 1));
    let contaPorNivelAcro = treinadoAcro ? nv + graduacao + modAcro : Math.floor(nv / 2) + modAcro;
    document.getElementById("periciaAcro").innerText = contaPorNivelAcro;

    // Adestrar Animais (Carisma)
    let treinadoAdes = document.getElementById("treinadoAdes").checked;
    let modAdes = Math.floor((document.getElementById("modCar").innerText * 1));
    let contaPorNivelAdes = treinadoAdes ? nv + graduacao + modAdes : Math.floor(nv / 2) + modAdes;
    document.getElementById("periciaAdes").innerText = contaPorNivelAdes;

    // Atletismo (Força)
    let treinadoAtle = document.getElementById("treinadoAtle").checked;
    let modAtle = Math.floor((document.getElementById("modFor").innerText * 1));
    let contaPorNivelAtle = treinadoAtle ? nv + graduacao + modAtle : Math.floor(nv / 2) + modAtle;
    document.getElementById("periciaAtle").innerText = contaPorNivelAtle;

    // Atuação (Carisma)
let treinadoAtua = document.getElementById("treinadoAtua").checked;
let modAtua = Math.floor((document.getElementById("modCar").innerText * 1));
let contaPorNivelAtua = treinadoAtua ? nv + graduacao + modAtua : Math.floor(nv / 2) + modAtua;
document.getElementById("periciaAtua").innerText = contaPorNivelAtua;

// Cavalgar (Destreza)
let treinadoCava = document.getElementById("treinadoCava").checked;
let modCava = Math.floor((document.getElementById("modDes").innerText * 1));
let contaPorNivelCava = treinadoCava ? nv + graduacao + modCava : Math.floor(nv / 2) + modCava;
document.getElementById("periciaCava").innerText = contaPorNivelCava;

// Conhecimento (Inteligência)
let treinadoConh = document.getElementById("treinadoConh").checked;
let modConh = Math.floor((document.getElementById("modInt").innerText * 1));
let contaPorNivelConh = treinadoConh ? nv + graduacao + modConh : Math.floor(nv / 2) + modConh;
document.getElementById("periciaConh").innerText = contaPorNivelConh;

// Cura (Sabedoria)
let treinadoCura = document.getElementById("treinadoCura").checked;
let modCura = Math.floor((document.getElementById("modSab").innerText * 1));
let contaPorNivelCura = treinadoCura ? nv + graduacao + modCura : Math.floor(nv / 2) + modCura;
document.getElementById("periciaCura").innerText = contaPorNivelCura;

// Diplomacia (Carisma)
let treinadoDipl = document.getElementById("treinadoDipl").checked;
let modDipl = Math.floor((document.getElementById("modCar").innerText * 1));
let contaPorNivelDipl = treinadoDipl ? nv + graduacao + modDipl : Math.floor(nv / 2) + modDipl;
document.getElementById("periciaDipl").innerText = contaPorNivelDipl;

// Enganação (Carisma)
let treinadoEnga = document.getElementById("treinadoEnga").checked;
let modEnga = Math.floor((document.getElementById("modCar").innerText * 1));
let contaPorNivelEnga = treinadoEnga ? nv + graduacao + modEnga : Math.floor(nv / 2) + modEnga;
document.getElementById("periciaEnga").innerText = contaPorNivelEnga;

// Furtividade (Destreza)
let treinadoFurt = document.getElementById("treinadoFurt").checked;
let modFurt = Math.floor((document.getElementById("modDes").innerText * 1));
let contaPorNivelFurt = treinadoFurt ? nv + graduacao + modFurt : Math.floor(nv / 2) + modFurt;
document.getElementById("periciaFurt").innerText = contaPorNivelFurt;

// Identificar Magia (Inteligência)
let treinadoIden = document.getElementById("treinadoIden").checked;
let modIden = Math.floor((document.getElementById("modInt").innerText * 1));
let contaPorNivelIden = treinadoIden ? nv + graduacao + modIden : Math.floor(nv / 2) + modIden;
document.getElementById("periciaIden").innerText = contaPorNivelIden;

// Iniciativa (Destreza)
let treinadoInic = document.getElementById("treinadoInic").checked;
let modInic = Math.floor((document.getElementById("modDes").innerText * 1));
let contaPorNivelInic = treinadoInic ? nv + graduacao + modInic : Math.floor(nv / 2) + modInic;
document.getElementById("periciaInic").innerText = contaPorNivelInic;

// Intimidação (Carisma)
let treinadoInti = document.getElementById("treinadoInti").checked;
let modInti = Math.floor((document.getElementById("modCar").innerText * 1));
let contaPorNivelInti = treinadoInti ? nv + graduacao + modInti : Math.floor(nv / 2) + modInti;
document.getElementById("periciaInti").innerText = contaPorNivelInti;

// Intuição (Sabedoria)
let treinadoIntu = document.getElementById("treinadoIntu").checked;
let modIntu = Math.floor((document.getElementById("modSab").innerText * 1));
let contaPorNivelIntu = treinadoIntu ? nv + graduacao + modIntu : Math.floor(nv / 2) + modIntu;
document.getElementById("periciaIntu").innerText = contaPorNivelIntu;

// Ladinagem (Destreza)
let treinadoLadi = document.getElementById("treinadoLadi").checked;
let modLadi = Math.floor((document.getElementById("modDes").innerText * 1));
let contaPorNivelLadi = treinadoLadi ? nv + graduacao + modLadi : Math.floor(nv / 2) + modLadi;
document.getElementById("periciaLadi").innerText = contaPorNivelLadi;

// Obter Informação (Inteligência)
let treinadoObte = document.getElementById("treinadoObte").checked;
let modObte = Math.floor((document.getElementById("modInt").innerText * 1));
let contaPorNivelObte = treinadoObte ? nv + graduacao + modObte : Math.floor(nv / 2) + modObte;
document.getElementById("periciaObte").innerText = contaPorNivelObte;

// Ofício (Inteligência)
let treinadoOfic = document.getElementById("treinadoOfic").checked;
let modOfic = Math.floor((document.getElementById("modInt").innerText * 1));
let contaPorNivelOfic = treinadoOfic ? nv + graduacao + modOfic : Math.floor(nv / 2) + modOfic;
document.getElementById("periciaOfic").innerText = contaPorNivelOfic;

// Percepção (Sabedoria)
let treinadoPerc = document.getElementById("treinadoPerc").checked;
let modPerc = Math.floor((document.getElementById("modSab").innerText * 1));
let contaPorNivelPerc = treinadoPerc ? nv + graduacao + modPerc : Math.floor(nv / 2) + modPerc;
document.getElementById("periciaPerc").innerText = contaPorNivelPerc;

// Sobrevivência (Sabedoria)
let treinadoSobr = document.getElementById("treinadoSobr").checked;
let modSobr = Math.floor((document.getElementById("modSab").innerText * 1));
let contaPorNivelSobr = treinadoSobr ? nv + graduacao + modSobr : Math.floor(nv / 2) + modSobr;
document.getElementById("periciaSobr").innerText = contaPorNivelSobr;

}