function OsztokSzama(vizsgaltSzam){
    let osztok=0;
    for(let i=0;i<=vizsgaltSzam;i++){
        if(vizsgaltSzam%i==0){
            osztok++;
        }
    }
    return osztok;
}

function ParatlanLista(vizsgaltTomb){
    let paratlanok=[];
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]%2==1){
            paratlanok.push(vizsgaltTomb[i]);
        }
    }
    return paratlanok;
}

//Vizsgált objektum:
vizsgazokAdatai = [{
    nev: "Koaxk Ábel",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 20,
    typeScriptVizsgaresz: 15,
    angularVizsgaresz: 10,
    serverVizsgaresz:15
},
{
    nev: "Meg Győző",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 20,
    typeScriptVizsgaresz: 20,
    angularVizsgaresz: 15,
    serverVizsgaresz:15
},
{
    nev: "Fejet Lenke",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 5,
    typeScriptVizsgaresz: 5,
    angularVizsgaresz: 5,
    serverVizsgaresz:5
},
{
    nev: "Vak Cina",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 20,
    typeScriptVizsgaresz: 20,
    angularVizsgaresz: 10,
    serverVizsgaresz:10
},
{
    nev: "Akciós Áron",
    htmlVizsgaresz: 10,
    bootstrapVizsgaresz: 10,
    javaScriptVizsgaresz: 10,
    typeScriptVizsgaresz: 10,
    angularVizsgaresz: 10,
    serverVizsgaresz:10
},
{
    nev: "Boro Zoltán",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 15,
    typeScriptVizsgaresz: 15,
    angularVizsgaresz: 10,
    serverVizsgaresz:10
},
{
    nev: "Eszet Lenke",
    htmlVizsgaresz: 5,
    bootstrapVizsgaresz: 5,
    javaScriptVizsgaresz: 5,
    typeScriptVizsgaresz: 5,
    angularVizsgaresz: 5,
    serverVizsgaresz:5
},
{
    nev: "Békés Csaba",
    htmlVizsgaresz: 15,
    bootstrapVizsgaresz: 15,
    javaScriptVizsgaresz: 20,
    typeScriptVizsgaresz: 20,
    angularVizsgaresz: 15,
    serverVizsgaresz:15
},
];

function VizsgaEredmeny(nev){
    let osszPontszam=0;
    
    for(let i=0;i<vizsgazokAdatai.length;i++){
    if(vizsgazokAdatai[i].nev==nev){
        osszPontszam+=vizsgazokAdatai[i].htmlVizsgaresz+vizsgazokAdatai[i].bootstrapVizsgaresz+vizsgazokAdatai[i].javaScriptVizsgaresz+vizsgazokAdatai[i].typeScriptVizsgaresz+vizsgazokAdatai[i].angularVizsgaresz+vizsgazokAdatai[i].serverVizsgaresz;
    }
    }
    return osszPontszam;
}