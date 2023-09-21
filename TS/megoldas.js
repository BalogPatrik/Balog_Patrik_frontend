function  KivalasztottBetuk(vizsgaltSzoveg,kivalasztottBetuk){
    let darab=0;
    for(let i=0;i<vizsgaltSzoveg.length;i++){
        for(let j=0;j<kivalasztottBetuk.length;j++){
            if(vizsgaltSzoveg[i]==kivalasztottBetuk[j]){
                darab++;
            }
        }
    }
    return darab;
}

function Szamtani(elsoErtek,masodikErtek,harmadikErtek){
    let szamtani=false;
    if((masodikErtek-elsoErtek)==(harmadikErtek-masodikErtek)){
        szamtani=true;
    }
    return szamtani;
}

function VizsgaJegy(osszPont){
    if(osszPont<50){
        return "Elégtelen";
    }
    else if(osszPont<60){
        return "Elégséges";
    }
    else if(osszPont<70){
        return "Közepes";
    }
    else if(osszPont<80){
        return "Jó";
    }
    else if(osszPont<101){
        return "Jeles";
    }
    else{
        return "";
    }

}