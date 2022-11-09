"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let nevPattern = /^[aA-zZ, ]{1,}$/;
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
        }
        else {
            rosszAdat(cim);
            jocim = false;
        }
        //Évszám ellenőrzés
        let joev = false;
        let ev = document.getElementById('evszaminput');
        if (parseInt(ev.value) < 2023) {
            joAdat(ev);
            joev = true;
        }
        else {
            rosszAdat(ev);
            joev = false;
        }
        //Ár ellenőrzés
        let joar = false;
        let ar = document.getElementById('arinput');
        if (parseInt(ar.value) > 0) {
            joAdat(ar);
            joar = true;
        }
        else {
            rosszAdat(ar);
            joar = false;
        }
        //magasság ellenőrzés
        let jomagassag = false;
        let magassag = document.getElementById('magassaginput');
        if (parseInt(magassag.value) > 9) {
            joAdat(magassag);
            jomagassag = true;
        }
        else {
            rosszAdat(magassag);
            jomagassag = false;
        }
        //Feltöltés + összesítés
        if (jocim && joev && joev && jomagassag) {
            szobrok.push(new Statue_1.Statue(cim.value, parseInt(ev.value), parseInt(ar.value), parseInt(magassag.value)));
            cim.value = "";
            ev.value = "";
            ar.value = "";
            magassag.value = "";
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
