import { Artwork } from "./Artwork";
import { Statue } from "./Statue";

let nevPattern = /^[aA-zZ, ]{1,}$/;

let szobrok: Artwork[] = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('gomb')?.addEventListener('click', () =>{

        //Cím ellenőrzés
        let jocim = false;
        let cim : HTMLInputElement = document.getElementById('nevinput')as HTMLInputElement;
        if(nevPattern.test(cim.value)){
            joAdat(cim);
            jocim = true;
        }else{
            rosszAdat(cim);
            jocim = false;
        }

        //Évszám ellenőrzés
        let joev = false;
        let ev : HTMLInputElement = document.getElementById('evszaminput')as HTMLInputElement;
        if(parseInt(ev.value) < 2023){
            joAdat(ev)
            joev = true;
        }else{
            rosszAdat(ev);
            joev = false;
        }

        //Ár ellenőrzés
        let joar = false;
        let ar : HTMLInputElement = document.getElementById('arinput')as HTMLInputElement;
        if(parseInt(ar.value) > 0){
            joAdat(ar)
            joar = true;
        }else{
            rosszAdat(ar);
            joar = false;
        }

        //magasság ellenőrzés
        let jomagassag = false;
        let magassag : HTMLInputElement = document.getElementById('magassaginput')as HTMLInputElement;
        if(parseInt(magassag.value) > 9){
            joAdat(magassag)
            jomagassag = true;
        }else{
            rosszAdat(magassag);
            jomagassag = false;
        }

        //Feltöltés + összesítés
        if(jocim && joev && joev && jomagassag){
            szobrok.push(new Statue(cim.value,parseInt(ev.value), parseInt(ar.value), parseInt(magassag.value)));
            cim.value = "";
            ev.value = "";
            ar.value = "";
            magassag.value = "";
        }


    })

    //rossz adat esetén piros border + ellenorzo
    function rosszAdat (adat : HTMLInputElement){
        adat.style.border = "1px solid red";
    }

    //joadat esetén alapértelmezett border + ellenorzo
    function joAdat(adat: HTMLInputElement){
        adat.style.border = "1px solid #ced4da";
    }
})