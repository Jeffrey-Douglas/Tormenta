let graduacao = 3;

function modificadorHabilidades() {
    
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


function pericias() {
    let nivelPersonagem = document.getElementById("nivel").value * 1;

// Acrobacia (Destreza)
let treinadoAcro = document.getElementById("treinadoAcro").checked;
let modAcro = Math.floor(document.getElementById("modDes").innerText * 1);
let outrosAcro = document.getElementById("outrosAcro").value * 1;
let contaPorNivelAcro = treinadoAcro ? nivelPersonagem + graduacao + modAcro + outrosAcro : Math.floor(nivelPersonagem / 2) + modAcro + outrosAcro;
document.getElementById("periciaAcro").innerText = contaPorNivelAcro;

// Adestrar Animais (Carisma)
let treinadoAdes = document.getElementById("treinadoAdes").checked;
let modAdes = Math.floor(document.getElementById("modCar").innerText * 1);
let outrosAdes = document.getElementById("outrosAdes").value * 1;
let contaPorNivelAdes = treinadoAdes ? nivelPersonagem + graduacao + modAdes + outrosAdes : Math.floor(nivelPersonagem / 2) + modAdes + outrosAdes;
document.getElementById("periciaAdes").innerText = contaPorNivelAdes;

// Atletismo (Força)
let treinadoAtle = document.getElementById("treinadoAtle").checked;
let modAtle = Math.floor(document.getElementById("modFor").innerText * 1);
let outrosAtle = document.getElementById("outrosAtle").value * 1;
let contaPorNivelAtle = treinadoAtle ? nivelPersonagem + graduacao + modAtle + outrosAtle : Math.floor(nivelPersonagem / 2) + modAtle + outrosAtle;
document.getElementById("periciaAtle").innerText = contaPorNivelAtle;

// Atuação (Carisma)
let treinadoAtua = document.getElementById("treinadoAtua").checked;
let modAtua = Math.floor(document.getElementById("modCar").innerText * 1);
let outrosAtua = document.getElementById("outrosAtua").value * 1;
let contaPorNivelAtua = treinadoAtua ? nivelPersonagem + graduacao + modAtua + outrosAtua : Math.floor(nivelPersonagem / 2) + modAtua + outrosAtua;
document.getElementById("periciaAtua").innerText = contaPorNivelAtua;

// Cavalgar (Destreza)
let treinadoCava = document.getElementById("treinadoCava").checked;
let modCava = Math.floor(document.getElementById("modDes").innerText * 1);
let outrosCava = document.getElementById("outrosCava").value * 1;
let contaPorNivelCava = treinadoCava ? nivelPersonagem + graduacao + modCava + outrosCava : Math.floor(nivelPersonagem / 2) + modCava + outrosCava;
document.getElementById("periciaCava").innerText = contaPorNivelCava;

// Conhecimento (Inteligência)
let treinadoConh = document.getElementById("treinadoConh").checked;
let modConh = Math.floor(document.getElementById("modInt").innerText * 1);
let outrosConh = document.getElementById("outrosConh").value * 1;
let contaPorNivelConh = treinadoConh ? nivelPersonagem + graduacao + modConh + outrosConh : Math.floor(nivelPersonagem / 2) + modConh + outrosConh;
document.getElementById("periciaConh").innerText = contaPorNivelConh;

// Cura (Sabedoria)
let treinadoCura = document.getElementById("treinadoCura").checked;
let modCura = Math.floor(document.getElementById("modSab").innerText * 1);
let outrosCura = document.getElementById("outrosCura").value * 1;
let contaPorNivelCura = treinadoCura ? nivelPersonagem + graduacao + modCura + outrosCura : Math.floor(nivelPersonagem / 2) + modCura + outrosCura;
document.getElementById("periciaCura").innerText = contaPorNivelCura;

// Diplomacia (Carisma)
let treinadoDipl = document.getElementById("treinadoDipl").checked;
let modDipl = Math.floor(document.getElementById("modCar").innerText * 1);
let outrosDipl = document.getElementById("outrosDipl").value * 1;
let contaPorNivelDipl = treinadoDipl ? nivelPersonagem + graduacao + modDipl + outrosDipl : Math.floor(nivelPersonagem / 2) + modDipl + outrosDipl;
document.getElementById("periciaDipl").innerText = contaPorNivelDipl;

// Enganação (Carisma)
let treinadoEnga = document.getElementById("treinadoEnga").checked;
let modEnga = Math.floor(document.getElementById("modCar").innerText * 1);
let outrosEnga = document.getElementById("outrosEnga").value * 1;
let contaPorNivelEnga = treinadoEnga ? nivelPersonagem + graduacao + modEnga + outrosEnga : Math.floor(nivelPersonagem / 2) + modEnga + outrosEnga;
document.getElementById("periciaEnga").innerText = contaPorNivelEnga;

// Furtividade (Destreza)
let treinadoFurt = document.getElementById("treinadoFurt").checked;
let modFurt = Math.floor(document.getElementById("modDes").innerText * 1);
let outrosFurt = document.getElementById("outrosFurt").value * 1;
let contaPorNivelFurt = treinadoFurt ? nivelPersonagem + graduacao + modFurt + outrosFurt : Math.floor(nivelPersonagem / 2) + modFurt + outrosFurt;
document.getElementById("periciaFurt").innerText = contaPorNivelFurt;

// Identificar Magia (Inteligência)
let treinadoIden = document.getElementById("treinadoIden").checked;
let modIden = Math.floor(document.getElementById("modInt").innerText * 1);
let outrosIden = document.getElementById("outrosIden").value * 1;
let contaPorNivelIden = treinadoIden ? nivelPersonagem + graduacao + modIden + outrosIden : Math.floor(nivelPersonagem / 2) + modIden + outrosIden;
document.getElementById("periciaIden").innerText = contaPorNivelIden;

// Iniciativa (Destreza)
let treinadoInic = document.getElementById("treinadoInic").checked;
let modInic = Math.floor(document.getElementById("modDes").innerText * 1);
let outrosInic = document.getElementById("outrosInic").value * 1;
let contaPorNivelInic = treinadoInic ? nivelPersonagem + graduacao + modInic + outrosInic : Math.floor(nivelPersonagem / 2) + modInic + outrosInic;
document.getElementById("periciaInic").innerText = contaPorNivelInic;

// Intimidação (Carisma)
let treinadoInti = document.getElementById("treinadoInti").checked;
let modInti = Math.floor(document.getElementById("modCar").innerText * 1);
let outrosInti = document.getElementById("outrosInti").value * 1;
let contaPorNivelInti = treinadoInti ? nivelPersonagem + graduacao + modInti + outrosInti : Math.floor(nivelPersonagem / 2) + modInti + outrosInti;
document.getElementById("periciaInti").innerText = contaPorNivelInti;

// Intuição (Sabedoria)
let treinadoIntu = document.getElementById("treinadoIntu").checked;
let modIntu = Math.floor(document.getElementById("modSab").innerText * 1);
let outrosIntu = document.getElementById("outrosIntu").value * 1;
let contaPorNivelIntu = treinadoIntu ? nivelPersonagem + graduacao + modIntu + outrosIntu : Math.floor(nivelPersonagem / 2) + modIntu + outrosIntu;
document.getElementById("periciaIntu").innerText = contaPorNivelIntu;

// Ladinagem (Destreza)
let treinadoLadi = document.getElementById("treinadoLadi").checked;
let modLadi = Math.floor(document.getElementById("modDes").innerText * 1);
let outrosLadi = document.getElementById("outrosLadi").value * 1;
let contaPorNivelLadi = treinadoLadi ? nivelPersonagem + graduacao + modLadi + outrosLadi : Math.floor(nivelPersonagem / 2) + modLadi + outrosLadi;
document.getElementById("periciaLadi").innerText = contaPorNivelLadi;

// Obter Informação (Inteligência)
let treinadoObte = document.getElementById("treinadoObte").checked;
let modObte = Math.floor(document.getElementById("modInt").innerText * 1);
let outrosObte = document.getElementById("outrosObte").value * 1;
let contaPorNivelObte = treinadoObte ? nivelPersonagem + graduacao + modObte + outrosObte : Math.floor(nivelPersonagem / 2) + modObte + outrosObte;
document.getElementById("periciaObte").innerText = contaPorNivelObte;

// Ofício (Inteligência)
let treinadoOfic = document.getElementById("treinadoOfic").checked;
let modOfic = Math.floor(document.getElementById("modInt").innerText * 1);
let outrosOfic = document.getElementById("outrosOfic").value * 1;
let contaPorNivelOfic = treinadoOfic ? nivelPersonagem + graduacao + modOfic + outrosOfic : Math.floor(nivelPersonagem / 2) + modOfic + outrosOfic;
document.getElementById("periciaOfic").innerText = contaPorNivelOfic;

// Percepção (Sabedoria)
let treinadoPerc = document.getElementById("treinadoPerc").checked;
let modPerc = Math.floor(document.getElementById("modSab").innerText * 1);
let outrosPerc = document.getElementById("outrosPerc").value * 1;
let contaPorNivelPerc = treinadoPerc ? nivelPersonagem + graduacao + modPerc + outrosPerc : Math.floor(nivelPersonagem / 2) + modPerc + outrosPerc;
document.getElementById("periciaPerc").innerText = contaPorNivelPerc;

// Sobrevivência (Sabedoria)
let treinadoSobr = document.getElementById("treinadoSobr").checked;
let modSobr = Math.floor(document.getElementById("modSab").innerText * 1);
let outrosSobr = document.getElementById("outrosSobr").value * 1;
let contaPorNivelSobr = treinadoSobr ? nivelPersonagem + graduacao + modSobr + outrosSobr : Math.floor(nivelPersonagem / 2) + modSobr + outrosSobr;
document.getElementById("periciaSobr").innerText = contaPorNivelSobr;


}

function resistencias() {
    let nivelPersonagem = document.getElementById("nivel").value * 1;

    let outrosReflexo = document.getElementById("outrosReflexo").value
    let valorReflexo = Math.floor((document.getElementById("modDes").innerText * 1) + (nivelPersonagem / 2) + (outrosReflexo * 1));
    document.getElementById("resistenciaReflexo").innerText = valorReflexo;

    let outrosFortitude = document.getElementById("outrosFortitude").value;
    let valorFortitude = Math.floor((document.getElementById("modCon").innerText * 1) + (nivelPersonagem / 2) + (outrosFortitude * 1));
    document.getElementById("resistenciaFortitude").innerText = valorFortitude;
    
    let outrosVontade = document.getElementById("outrosVontade").value;
    let valorVontade = Math.floor((document.getElementById("modSab").innerText * 1) + (nivelPersonagem / 2) + (outrosVontade * 1));
    document.getElementById("resistenciaVontade").innerText = valorVontade;


    // REFLEXO = 1d20+metade do nivel+Destreza

    // FORTITUDE = 1d20+metade do nivel+Constituição

    // VONTADE = 1d20+metade do nivel+Sabedoria

    
}