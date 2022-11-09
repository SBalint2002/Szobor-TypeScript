"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let nevPattern = /^[A-Za-z, ]{1,}$/;
let szobrok = [];
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    (_a = document.getElementById('gomb')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        //Cím ellenőrzés
        let jocim = false;
        let cim = document.getElementById('nevinput');
        if (nevPattern.test(cim.value)) {
            joAdat(cim);
            jocim = true;
            document.getElementById('nevhiba').textContent = "";
        }
        else {
            rosszAdat(cim);
            jocim = false;
            if (!cim.value) {
                document.getElementById('nevhiba').textContent = "Nem lehet üres";
            }
            else {
                document.getElementById('nevhiba').textContent = "Speciális karaktert vagy számot tartalmaz";
            }
        }
        //Évszám ellenőrzés
        let joev = false;
        let ev = document.getElementById('evszaminput');
        if (parseInt(ev.value) < 2023) {
            joAdat(ev);
            joev = true;
            document.getElementById('evhiba').textContent = "";
        }
        else {
            rosszAdat(ev);
            joev = false;
            if (ev.value = "") {
                document.getElementById('evhiba').textContent = "Nem lehet üres";
            }
            else
                document.getElementById('evhiba').textContent = "Legfeljebb idei évet írhat";
        }
        //Ár ellenőrzés
        let joar = false;
        let ar = document.getElementById('arinput');
        if (parseInt(ar.value) > 0) {
            joAdat(ar);
            joar = true;
            document.getElementById('arhiba').textContent = "";
        }
        else {
            rosszAdat(ar);
            joar = false;
            document.getElementById('arhiba').textContent = "Értéke minimum 1 Ft legyen!";
        }
        //magasság ellenőrzés
        let jomagassag = false;
        let magassag = document.getElementById('magassaginput');
        if (parseInt(magassag.value) > 9) {
            joAdat(magassag);
            jomagassag = true;
            document.getElementById('magassaghiba').textContent = "";
        }
        else {
            rosszAdat(magassag);
            jomagassag = false;
            document.getElementById('magassaghiba').textContent = "Legalább 10 cm legyen a magassága!";
        }
        //Feltöltés + összesítés
        if (jocim && joev && joev && jomagassag) {
            szobrok.push(new Statue_1.Statue(cim.value, parseInt(ev.value), parseInt(ar.value), parseInt(magassag.value)));
            cim.value = "";
            ev.value = "";
            ar.value = "";
            magassag.value = "";
            document.getElementById('darabszam').textContent = "Művek darabszáma: " + String(szobrok.length);
            let osszar = 0;
            for (let i = 0; i < szobrok.length; i++) {
                osszar += szobrok[i].price;
            }
            document.getElementById('osszertek').textContent = "Művek összesített értéke: " + String(osszar) + " Ft";
        }
    });
    //rossz adat esetén piros border + ellenorzo
    function rosszAdat(adat) {
        adat.style.border = "1px solid red";
    }
    //joadat esetén alapértelmezett border + ellenorzo
    function joAdat(adat) {
        adat.style.border = "1px solid #ced4da";
    }
});
