var veces = 0;

var desaprobado = "btn btn-secondary";


function prender(mat)
{
    if (mat.className == "btn btn-secondary")
    {
        mat.className = "btn btn-success";
    } else if(mat.className == "btn btn-success")
        {
            mat.className = "btn btn-secondary";
        }
}

function chckprimero()
{
    var inglesuno = document.getElementById("ingi");
    var prgi = document.getElementById("prgi");
    var anmatuno = document.getElementById("anmati");
    var isis = document.getElementById("isis");
    var admo = document.getElementById("admo");
    var algi = document.getElementById("algi");
    var meto = document.getElementById("meto");
    var arq  = document.getElementById("arq");
    var edi = document.getElementById("edi");
    var edii = document.getElementById("edii");
    var os = document.getElementById("os");
    var prob = document.getElementById("prob");
    var sisi = document.getElementById("sisi");
    var anmatdos = document.getElementById("anmatii");
    var inglesdos = document.getElementById("ingii");
    var prgii = document.getElementById("prgii");
    var db = document.getElementById("db");
    var invop = document.getElementById("invop");
    var sisii = document.getElementById("sisii");
    var tele = document.getElementById("tele");
    var prac = document.getElementById("prac");
    var eco = document.getElementById("eco");
    var ediii = document.getElementById("ediii");
    
    var espaciocuarto = document.getElementById("fourthyear");
    var espaciotercero = document.getElementById("thirdyear");
    var espaciosegundo = document.getElementById("secondyear");
    if (anmatuno.className == "primero" && anmatuno.firstChild.className == desaprobado)
    {
        espaciosegundo.appendChild(anmatuno);
        anmatuno.className = "segundo";
    }
    if (anmatuno.className == "segundo" && anmatuno.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(anmatdos);
        anmatdos.className = "tercero";
    }
    if (anmatuno.className == "segundo" && anmatuno.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(prob);
        prob.className = "tercero";
    }
    if (inglesuno.className == "primero" && inglesuno.firstChild.className == desaprobado)
    {
        espaciosegundo.appendChild(inglesuno);
        inglesuno.className = "segundo";
    }
    if (inglesuno.className == "segundo" && inglesuno.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(inglesdos);
        inglesdos.className ="tercero";
    }
    if (prgi.className == "primero" && prgi.firstChild.className == desaprobado)
    {
        espaciosegundo.appendChild(prgi);
        prgi.className = "segundo";
    }
    if (prgi.className == "segundo" && prgi.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(prgii);
        espaciotercero.appendChild(db);
        prgii.className ="tercero";
        db.className = "tercero";
    }
    if (isis.className == "primero" && isis.firstChild.className == desaprobado)
    {
        espaciosegundo.appendChild(isis);
        isis.className = "segundo";
    }
    if (isis.className == "segundo" && isis.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(sisi);
        sisi.className = "tercero";
    }
    if (admo.className == "primero" && admo.firstChild.className == desaprobado)
    {
        espaciosegundo.appendChild(admo);
        admo.className = "segundo";
    }
    if (admo.className == "segundo" && admo.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(sisi);
        sisi.className = "tercero";
    }
    if (algi.className == "primero" && algi.firstChild.className == desaprobado)
    {
        espaciosegundo.appendChild(algi);
        algi.className = "segundo";
    }
    if (algi.className == "segundo" && algi.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(prob);
        prob.className = "tercero";
    }
    if (meto.className == "primero" && meto.firstChild.className == desaprobado)
    {
        espaciosegundo.appendChild(meto);
        meto.className = "segundo";
    }
    if (arq.className == "primero" && arq.firstChild.className == desaprobado)
    {
        espaciosegundo.appendChild(arq);
        arq.className = "segundo";
    }
    if (arq.className == "segundo" && arq.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(os);
        os.className = "tercero";
    }
    if (edi.className == "primero" && edi.firstChild.className == desaprobado)
    {
        espaciosegundo.appendChild(edi);
        edi.className = "segundo";
    }
  

    if (prob.className == "tercero" && prob.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(invop);
        invop.className = "cuarto";
    }
    if (anmatdos.className == "tercero" && anmatdos.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(invop);
        invop.className = "cuarto";
    }
    if (prgii.className == "tercero" && prgii.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(invop);
        invop.className = "cuarto";
    }
    if (sisi.className == "tercero" && sisi.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(eco);
        eco.className = "cuarto";
    }
    if (os.className == "tercero" && os.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(tele);
        tele.className = "cuarto";
    }
    if (sisi.className == "tercero" && sisi.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(sisii);
        sisii.className = "cuarto";
    }
    if (meto.className == "tercero" && meto.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(tele);
        tele.className = "cuarto";
    }
    if (prgii.className == "tercero" && prgii.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(prac);
        prac.className = "cuarto";
    }
    if (db.className == "tercero" && db.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(prac);
        prac.className = "cuarto";
    }
    if (sisi.className == "tercero" && sisi.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(prac);
        prac.className = "cuarto";
    }



 }
function chcksegundo()
{
    var inglesuno = document.getElementById("ingi");
    var prgi = document.getElementById("prgi");
    var anmatuno = document.getElementById("anmati");
    var isis = document.getElementById("isis");
    var admo = document.getElementById("admo");
    var algi = document.getElementById("algi");
    var meto = document.getElementById("meto");
    var arq  = document.getElementById("arq");
    var edi = document.getElementById("edi");

    var edii = document.getElementById("edii");
    var os = document.getElementById("os");
    var prob = document.getElementById("prob");
    var sisi = document.getElementById("sisi");
    var anmatdos = document.getElementById("anmatii");
    var inglesdos = document.getElementById("ingii");
    var prgii = document.getElementById("prgii");
    var db = document.getElementById("db");

    var invop = document.getElementById("invop");
    var sisii = document.getElementById("sisii");
    var tele = document.getElementById("tele");
    var prac = document.getElementById("prac");
    var eco = document.getElementById("eco");
    var ediii = document.getElementById("ediii"); 

    var espacioquinto = document.getElementById("fifthyear");
    var espaciocuarto = document.getElementById("fourthyear");
    var espaciotercero = document.getElementById("thirdyear");

    // Primero recursa segundo -> tercero
    if (anmatuno.className == "segundo" && anmatuno.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(anmatuno);
        anmatuno.className = "tercero";
    }
    if (inglesuno.className == "segundo" && inglesuno.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(inglesuno);
        inglesuno.className = "tercero";
    }
    if (isis.className == "segundo" && isis.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(isis);
        isis.className = "tercero";
    }
    if (meto.className == "segundo" && meto.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(meto);
        meto.className = "tercero";
    }
    if (prgi.className == "segundo" && prgi.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(prgi);
        prgi.className = "tercero";
    }
    if (admo.className == "segundo" && admo.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(admo);
        admo.className = "tercero";
    }
    if (edi.className == "segundo" && edi.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(edi);
        edi.className = "tercero";
    }
    if (algi.className == "segundo" && algi.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(algi);
        algi.className = "tercero";
    }
    if (arq.className == "segundo" && arq.firstChild.className == desaprobado)
    {
        espaciotercero.appendChild(arq);
        arq.className = "tercero";
    }

    // Primero recursa tercero, correlativas de segundo -> cuarto
     if (anmatuno.className == "tercero" && anmatuno.firstChild.className == desaprobado)
     {
         espaciocuarto.appendChild(anmatdos);
         anmatdos.className = "cuarto";
     }
     if (anmatuno.className == "tercero" && anmatuno.firstChild.className == desaprobado)
     {
         espaciocuarto.appendChild(prob);
         prob.className = "cuarto";
     }
   
     if (inglesuno.className == "tercero" && inglesuno.firstChild.className == desaprobado)
     {
         espaciocuarto.appendChild(inglesdos);
         inglesdos.className ="cuarto";
     }
   
     if (prgi.className == "tercero" && prgi.firstChild.className == desaprobado)
     {
         espaciocuarto.appendChild(prgii);
         espaciocuarto.appendChild(db);
         prgii.className ="cuarto";
         db.className = "cuarto";
     }
  
     if (isis.className == "tercero" && isis.firstChild.className == desaprobado)
     {
         espaciocuarto.appendChild(sisi);
         sisi.className = "cuarto";
     }
   
     if (admo.className == "tercero" && admo.firstChild.className == desaprobado)
     {
         espaciocuarto.appendChild(sisi);
         sisi.className = "cuarto";
     }

     if (algi.className == "tercero" && algi.firstChild.className == desaprobado)
     {
         espaciocuarto.appendChild(prob);
         prob.className = "cuarto";
     }
   
    
     if (arq.className == "tercero" && arq.firstChild.className == desaprobado)
     {
         espaciocuarto.appendChild(os);
         os.className = "cuarto";
     }
   
// segundo recursa  segundo ->  tercero

     if (inglesdos.className == "segundo" && inglesdos.firstChild.className == desaprobado)
     {
         espaciotercero.appendChild(inglesdos);
         inglesdos.className = "tercero";
     }
     if (prob.className == "segundo" && prob.firstChild.className == desaprobado)
     {
         espaciotercero.appendChild(prob);
         prob.className = "tercero";
     }
     if (anmatdos.className == "segundo" && anmatdos.firstChild.className == desaprobado)
     {
         espaciotercero.appendChild(anmatdos);
         anmatdos.className = "tercero";
     }
     if (prgii.className == "segundo" && prgii.firstChild.className == desaprobado)
     {
         espaciotercero.appendChild(prgii);
         prgii.className = "tercero";
     }
     if (sisi.className == "segundo" && sisi.firstChild.className == desaprobado)
     {
         espaciotercero.appendChild(sisi);
         sisi.className = "tercero";
     }
     if (os.className == "segundo" && os.firstChild.className == desaprobado)
     {
         espaciotercero.appendChild(os);
         os.className = "tercero";
     }

     if (db.className == "segundo" && db.firstChild.className == desaprobado)
     {
         espaciotercero.appendChild(db);
         db.className = "tercero";
     }
    
     if (edii.className == "segundo" && edii.firstChild.className == desaprobado)
     {
         espaciotercero.appendChild(edii);
         edii.className = "tercero";
     }

 // correlativas segundo recursando cuarto -> quinto
     if (prob.className == "cuarto" && prob.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(invop);
         invop.className = "quinto";
     }
     if (anmatdos.className == "cuarto" && anmatdos.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(invop);
         invop.className = "quinto";
     }
     if (prgii.className == "cuarto" && prgii.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(invop);
         invop.className = "quinto";
     }
     if (sisi.className == "cuarto" && sisi.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(eco);
         eco.className = "quinto";
     }
     if (os.className == "cuarto" && os.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(tele);
         tele.className = "quinto";
     }
     if (sisi.className == "cuarto" && sisi.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(sisii);
         sisii.className = "quinto";
     }
     if (meto.className == "cuarto" && meto.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(tele);
         tele.className = "quinto";
     }
     if (prgii.className == "cuarto" && prgii.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(prac);
         prac.className = "quinto";
     }
     if (db.className == "cuarto" && db.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(prac);
         prac.className = "quinto";
     }
     if (sisi.className == "cuarto" && sisi.firstChild.className == desaprobado)
     {
         espacioquinto.appendChild(prac);
         prac.className = "quinto";
     }
     
// de segundo recursando tercero -> 4
if (prob.className == "tercero" && prob.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(invop);
    invop.className = "cuarto";
}
if (anmatdos.className == "tercero" && anmatdos.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(invop);
    invop.className = "cuarto";
}
if (prgii.className == "tercero" && prgii.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(invop);
    invop.className = "cuarto";
}
if (sisi.className == "tercero" && sisi.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(eco);
    eco.className = "cuarto";
}
if (os.className == "tercero" && os.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(tele);
    tele.className = "cuarto";
}
if (sisi.className == "tercero" && sisi.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(sisii);
    sisii.className = "cuarto";
}
if (meto.className == "tercero" && meto.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(tele);
    tele.className = "cuarto";
}
if (prgii.className == "tercero" && prgii.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(prac);
    prac.className = "cuarto";
}
if (db.className == "tercero" && db.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(prac);
    prac.className = "cuarto";
}
if (sisi.className == "tercero" && sisi.firstChild.className == desaprobado)
{
    espaciocuarto.appendChild(prac);
    prac.className = "cuarto";
}

}
function chcktercero()
{
    var inglesuno = document.getElementById("ingi");
    var prgi = document.getElementById("prgi");
    var anmatuno = document.getElementById("anmati");
    var isis = document.getElementById("isis");
    var admo = document.getElementById("admo");
    var algi = document.getElementById("algi");
    var meto = document.getElementById("meto");
    var arq  = document.getElementById("arq");
    var edi = document.getElementById("edi");

    var edii = document.getElementById("edii");
    var os = document.getElementById("os");
    var prob = document.getElementById("prob");
    var sisi = document.getElementById("sisi");
    var anmatdos = document.getElementById("anmatii");
    var inglesdos = document.getElementById("ingii");
    var prgii = document.getElementById("prgii");
    var db = document.getElementById("db");

    var invop = document.getElementById("invop");
    var sisii = document.getElementById("sisii");
    var tele = document.getElementById("tele");
    var prac = document.getElementById("prac");
    var eco = document.getElementById("eco");
    var ediii = document.getElementById("ediii"); 

    var espaciosexto = document.getElementById("sixthyear");
    var espacioquinto = document.getElementById("fifthyear");
    var espaciocuarto = document.getElementById("fourthyear");
    
    // primero recursa tercero -> 4
    if (anmatuno.className == "tercero" && anmatuno.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(anmatuno);
        anmatuno.className = "cuarto";
    }
    if (inglesuno.className == "tercero" && inglesuno.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(inglesuno);
        inglesuno.className = "cuarto";
    }
    if (isis.className == "tercero" && isis.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(isis);
        isis.className = "cuarto";
    }
    if (meto.className == "tercero" && meto.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(meto);
        meto.className = "cuarto";
    }
    if (prgi.className == "tercero" && prgi.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(prgi);
        prgi.className = "cuarto";
    }
    if (admo.className == "tercero" && admo.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(admo);
        admo.className = "cuarto";
    }
    if (edi.className == "tercero" && edi.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(edi);
        edi.className = "cuarto";
    }
    if (algi.className == "tercero" && algi.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(algi);
        algi.className = "cuarto";
    }
    if (arq.className == "tercero" && arq.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(arq);
        arq.className = "cuarto";
    }
    // Segundo recursa tercero -> cuarto
    if (inglesdos.className == "tercero" && inglesdos.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(inglesdos);
        inglesdos.className = "cuarto";
    }
    if (prob.className == "tercero" && prob.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(prob);
        prob.className = "cuarto";
    }
    if (anmatdos.className == "tercero" && anmatdos.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(anmatdos);
        anmatdos.className = "cuarto";
    }
    if (prgii.className == "tercero" && prgii.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(prgii);
        prgii.className = "cuarto";
    }
    if (sisi.className == "tercero" && sisi.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(sisi);
        sisi.className = "cuarto";
    }
    if (os.className == "tercero" && os.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(os);
        os.className = "cuarto";
    }

    if (db.className == "tercero" && db.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(db);
        db.className = "cuarto";
    }
   
    if (edii.className == "tercero" && edii.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(edii);
        edii.className = "cuarto";
    }
    // tercero recursa tercero -> cuarto
    if (invop.className == "tercero" && invop.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(invop);
        invop.className = "cuarto";
    }
    if (sisii.className == "tercero" && sisii.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(sisii);
        sisii.className = "cuarto";
    }
    if (tele.className == "tercero" && tele.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(tele);
        tele.className = "cuarto";
    }
    if (prac.className == "tercero" && prac.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(prac);
        prac.className = "cuarto";
    }
    if (eco.className == "tercero" && eco.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(eco);
        eco.className = "cuarto";
    }
    if (ediii.className == "tercero" && ediii.firstChild.className == desaprobado)
    {
        espaciocuarto.appendChild(ediii);
        ediii.className = "cuarto";
    }
// correlativas de primero recursan tercero ->  quinto
if (anmatuno.className == "cuarto" && anmatuno.firstChild.className == desaprobado)
{
    espacioquinto.appendChild(anmatdos);
    anmatdos.className = "quinto";
}
if (anmatuno.className == "cuarto" && anmatuno.firstChild.className == desaprobado)
{
    espacioquinto.appendChild(prob);
    prob.className = "quinto";
}
if (inglesuno.className == "cuarto" && inglesuno.firstChild.className == desaprobado)
{
    espacioquinto.appendChild(inglesdos);
    inglesdos.className ="quinto";
}
if (prgi.className == "cuarto" && prgi.firstChild.className == desaprobado)
{
    espacioquinto.appendChild(prgii);
    espacioquinto.appendChild(db);
    prgii.className ="quinto";
    db.className = "quinto";
}
if (isis.className == "cuarto" && isis.firstChild.className == desaprobado)
{
    espacioquinto.appendChild(sisi);
    sisi.className = "quinto";
}
if (admo.className == "cuarto" && admo.firstChild.className == desaprobado)
{
    espacioquinto.appendChild(sisi);
    sisi.className = "quinto";
}
if (algi.className == "cuarto" && algi.firstChild.className == desaprobado)
{
    espacioquinto.appendChild(prob);
    prob.className = "quinto";
}
if (arq.className == "cuarto" && arq.firstChild.className == desaprobado)
{
    espacioquinto.appendChild(os);
    os.className = "quinto";
}
    
// correlativas de segundo recursando tercero -> sexto
if (prob.className == "quinto" && prob.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(invop);
    invop.className = "sexto";
}
if (anmatdos.className == "quinto" && anmatdos.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(invop);
    invop.className = "sexto";
}
if (prgii.className == "quinto" && prgii.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(invop);
    invop.className = "sexto";
}
if (sisi.className == "quinto" && sisi.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(eco);
    eco.className = "sexto";
}
if (os.className == "quinto" && os.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(tele);
    tele.className = "sexto";
}
if (sisi.className == "quinto" && sisi.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(sisii);
    sisii.className = "sexto";
}
if (meto.className == "quinto" && meto.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(tele);
    tele.className = "sexto";
}
if (prgii.className == "quinto" && prgii.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(prac);
    prac.className = "sexto";
}
if (db.className == "quinto" && db.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(prac);
    prac.className = "sexto";
}
if (sisi.className == "quinto" && sisi.firstChild.className == desaprobado)
{
    espaciosexto.appendChild(prac);
    prac.className = "sexto";
}

}
function chckcuarto()
{
    var inglesuno = document.getElementById("ingi");
    var prgi = document.getElementById("prgi");
    var anmatuno = document.getElementById("anmati");
    var isis = document.getElementById("isis");
    var admo = document.getElementById("admo");
    var algi = document.getElementById("algi");
    var meto = document.getElementById("meto");
    var arq  = document.getElementById("arq");
    var edi = document.getElementById("edi");

    var edii = document.getElementById("edii");
    var os = document.getElementById("os");
    var prob = document.getElementById("prob");
    var sisi = document.getElementById("sisi");
    var anmatdos = document.getElementById("anmatii");
    var inglesdos = document.getElementById("ingii");
    var prgii = document.getElementById("prgii");
    var db = document.getElementById("db");

    var invop = document.getElementById("invop");
    var sisii = document.getElementById("sisii");
    var tele = document.getElementById("tele");
    var prac = document.getElementById("prac");
    var eco = document.getElementById("eco");
    var ediii = document.getElementById("ediii"); 

    var espaciosexto = document.getElementById("sixthyear");
    var espacioquinto = document.getElementById("fifthyear");

    // primero recursa cuarto -> quinto
    if (anmatuno.className == "cuarto" && anmatuno.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(anmatuno);
        anmatuno.className = "quinto";
    }
    if (inglesuno.className == "cuarto" && inglesuno.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(inglesuno);
        inglesuno.className = "quinto";
    }
    if (isis.className == "cuarto" && isis.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(isis);
        isis.className = "quinto";
    }
    if (meto.className == "cuarto" && meto.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(meto);
        meto.className = "quinto";
    }
    if (prgi.className == "cuarto" && prgi.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(prgi);
        prgi.className = "quinto";
    }
    if (admo.className == "cuarto" && admo.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(admo);
        admo.className = "quinto";
    }
    if (edi.className == "cuarto" && edi.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(edi);
        edi.className = "quinto";
    }
    if (algi.className == "cuarto" && algi.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(algi);
        algi.className = "quinto";
    }
    if (arq.className == "cuarto" && arq.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(arq);
        arq.className = "quinto";
    }
    // segundo recursando cuarto -> quinto
    if (inglesdos.className == "cuarto" && inglesdos.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(inglesdos);
        inglesdos.className = "quinto";
    }
    if (prob.className == "cuarto" && prob.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(prob);
        prob.className = "quinto";
    }
    if (anmatdos.className == "cuarto" && anmatdos.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(anmatdos);
        anmatdos.className = "quinto";
    }
    if (prgii.className == "cuarto" && prgii.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(prgii);
        prgii.className = "quinto";
    }
    if (sisi.className == "cuarto" && sisi.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(sisi);
        sisi.className = "quinto";
    }
    if (os.className == "cuarto" && os.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(os);
        os.className = "quinto";
    }

    if (db.className == "cuarto" && db.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(db);
        db.className = "quinto";
    }
   
    if (edii.className == "cuarto" && edii.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(edii);
        edii.className = "quinto";
    }
    // tercero recursando cuarto -> quinto
    if (invop.className == "cuarto" && invop.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(invop);
        invop.className = "quinto";
    }
    if (sisii.className == "cuarto" && sisii.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(sisii);
        sisii.className = "quinto";
    }
    if (tele.className == "cuarto" && tele.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(tele);
        tele.className = "quinto";
    }
    if (prac.className == "cuarto" && prac.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(prac);
        prac.className = "quinto";
    }
    if (eco.className == "cuarto" && eco.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(eco);
        eco.className = "quinto";
    }
    if (ediii.className == "cuarto" && ediii.firstChild.className == desaprobado)
    {
        espacioquinto.appendChild(ediii);
        ediii.className = "quinto";
    }
}
function chckquinto()
{
    var inglesuno = document.getElementById("ingi");
    var prgi = document.getElementById("prgi");
    var anmatuno = document.getElementById("anmati");
    var isis = document.getElementById("isis");
    var admo = document.getElementById("admo");
    var algi = document.getElementById("algi");
    var meto = document.getElementById("meto");
    var arq  = document.getElementById("arq");
    var edi = document.getElementById("edi");

    var edii = document.getElementById("edii");
    var os = document.getElementById("os");
    var prob = document.getElementById("prob");
    var sisi = document.getElementById("sisi");
    var anmatdos = document.getElementById("anmatii");
    var inglesdos = document.getElementById("ingii");
    var prgii = document.getElementById("prgii");
    var db = document.getElementById("db");

    var invop = document.getElementById("invop");
    var sisii = document.getElementById("sisii");
    var tele = document.getElementById("tele");
    var prac = document.getElementById("prac");
    var eco = document.getElementById("eco");
    var ediii = document.getElementById("ediii"); 

    var espaciosexto = document.getElementById("sixthyear");
    
    // primero recursa cuarto -> sexto
    if (anmatuno.className == "quinto" && anmatuno.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(anmatuno);
        anmatuno.className = "sexto";
    }
    if (inglesuno.className == "quinto" && inglesuno.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(inglesuno);
        inglesuno.className = "sexto";
    }
    if (isis.className == "quinto" && isis.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(isis);
        isis.className = "sexto";
    }
    if (meto.className == "quinto" && meto.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(meto);
        meto.className = "sexto";
    }
    if (prgi.className == "quinto" && prgi.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(prgi);
        prgi.className = "sexto";
    }
    if (admo.className == "quinto" && admo.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(admo);
        admo.className = "sexto";
    }
    if (edi.className == "quinto" && edi.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(edi);
        edi.className = "sexto";
    }
    if (algi.className == "quinto" && algi.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(algi);
        algi.className = "sexto";
    }
    if (arq.className == "quinto" && arq.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(arq);
        arq.className = "sexto";
    }
    // segundo recursando cuarto -> sexto
    if (inglesdos.className == "quinto" && inglesdos.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(inglesdos);
        inglesdos.className = "sexto";
    }
    if (prob.className == "quinto" && prob.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(prob);
        prob.className = "sexto";
    }
    if (anmatdos.className == "quinto" && anmatdos.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(anmatdos);
        anmatdos.className = "sexto";
    }
    if (prgii.className == "quinto" && prgii.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(prgii);
        prgii.className = "sexto";
    }
    if (sisi.className == "quinto" && sisi.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(sisi);
        sisi.className = "sexto";
    }
    if (os.className == "quinto" && os.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(os);
        os.className = "sexto";
    }

    if (db.className == "quinto" && db.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(db);
        db.className = "sexto";
    }
   
    if (edii.className == "quinto" && edii.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(edii);
        edii.className = "sexto";
    }
    // tercero recursando cuarto -> sexto
    if (invop.className == "quinto" && invop.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(invop);
        invop.className = "sexto";
    }
    if (sisii.className == "quinto" && sisii.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(sisii);
        sisii.className = "sexto";
    }
    if (tele.className == "quinto" && tele.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(tele);
        tele.className = "sexto";
    }
    if (prac.className == "quinto" && prac.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(prac);
        prac.className = "sexto";
    }
    if (eco.className == "quinto" && eco.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(eco);
        eco.className = "sexto";
    }
    if (ediii.className == "quinto" && ediii.firstChild.className == desaprobado)
    {
        espaciosexto.appendChild(ediii);
        ediii.className = "sexto";
    }
}





