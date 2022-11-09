import { Artwork } from "./Artwork";
import { Statue } from "./Statue";

let nevPattern = /^[A-Za-z, ]{1,}$/;

let szobrok: Artwork[] = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('gomb')?.addEventListener('click', () =>{

        //Cím ellenőrzés
        let jocim = false;
        let cim : HTMLInputElement = document.getElementById('nevinput')as HTMLInputElement;
        if(nevPattern.test(cim.value)){
            joAdat(cim);
            jocim = true;
            (document.getElementById('nevhiba') as HTMLElement).textContent = "";
        }else{
            rosszAdat(cim);
            jocim = false;
            if(!cim.value){
                (document.getElementById('nevhiba') as HTMLElement).textContent = "Nem lehet üres";
            }else{
                (document.getElementById('nevhiba') as HTMLElement).textContent = "Speciális karaktert vagy számot tartalmaz";
            }
            
        }

        //Évszám ellenőrzés
        let joev = false;
        let ev : HTMLInputElement = document.getElementById('evszaminput')as HTMLInputElement;
        if(parseInt(ev.value) < 2023){
            joAdat(ev)
            joev = true;
            (document.getElementById('evhiba') as HTMLElement).textContent = "";
        }else{
            rosszAdat(ev);
            joev = false;
            if(ev.value = ""){
                (document.getElementById('evhiba') as HTMLElement).textContent = "Nem lehet üres";
            }else (document.getElementById('evhiba') as HTMLElement).textContent = "Legfeljebb idei évet írhat";
        }

        //Ár ellenőrzés
        let joar = false;
        let ar : HTMLInputElement = document.getElementById('arinput')as HTMLInputElement;
        if(parseInt(ar.value) > 0){
            joAdat(ar)
            joar = true;
            (document.getElementById('arhiba') as HTMLElement).textContent = "";
        }else{
            rosszAdat(ar);
            joar = false;
            (document.getElementById('arhiba') as HTMLElement).textContent = "Értéke minimum 1 Ft legyen!";
        }

        //magasság ellenőrzés
        let jomagassag = false;
        let magassag : HTMLInputElement = document.getElementById('magassaginput')as HTMLInputElement;
        if(parseInt(magassag.value) > 9){
            joAdat(magassag)
            jomagassag = true;
            (document.getElementById('magassaghiba') as HTMLElement).textContent = "";
        }else{
            rosszAdat(magassag);
            jomagassag = false;
            (document.getElementById('magassaghiba') as HTMLElement).textContent = "Legalább 10 cm legyen a magassága!";
        }

        //Feltöltés + összesítés
        if(jocim && joev && joev && jomagassag){
            szobrok.push(new Statue(cim.value,parseInt(ev.value), parseInt(ar.value), parseInt(magassag.value)));
            cim.value = "";
            ev.value = "";
            ar.value = "";
            magassag.value = "";

            (document.getElementById('darabszam') as HTMLElement).textContent = "Művek darabszáma: " + String(szobrok.length);
            let osszar = 0;
            for(let i = 0; i < szobrok.length; i++){
                osszar += szobrok[i].price;
            }
            (document.getElementById('osszertek') as HTMLElement).textContent = "Művek összesített értéke: " + String(osszar) + " Ft"; 
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