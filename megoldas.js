"use strict";
function osszesOszto(szam) {
    const tombNeve = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            tombNeve.push(i);
        }
    }
    return tombNeve;
}
function parosDarab(szamok) {
    let darab = 0;
    for (const i of szamok) {
        if (i % 2 === 0) {
            darab++;
        }
    }
    return darab;
}
function fuggvenyhivasPalindrom(fuggveny) {
    const szoveg = fuggveny();
    const szokozNelkul = szoveg.split(" ").join("");
    const forditott = szokozNelkul.split("").reverse().join("");
    return szokozNelkul === forditott;
}
