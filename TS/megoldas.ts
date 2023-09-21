/*A megoldásodat ebben a fájlban készítsd el, majd fordítsd le typeScript compiler segítségével*/

function  KivalasztottBetuk(vizsgaltSzoveg:string,kivalasztottBetuk:string[]):number{
    let darab:number=0;
    for(let i:number=0;i<vizsgaltSzoveg.length;i++){
        for(let j:number=0;j<kivalasztottBetuk.length;j++){
            if(vizsgaltSzoveg[i]==kivalasztottBetuk[j]){
                darab++;
            }
        }
    }
    return darab;
}

function Szamtani(elsoErtek:number,masodikErtek:number,harmadikErtek:number):boolean{
    let szamtani:boolean=false;
    if((masodikErtek-elsoErtek)==(harmadikErtek-masodikErtek)){
        szamtani=true;
    }
    return szamtani;
}

function VizsgaJegy(osszPont:number):string{
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