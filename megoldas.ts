function osszesOszto(szam: number):number[] {
    const tombNeve: number[] = [];

    for (let i = 1; i <= szam; i++){
        if (szam % i === 0){
            tombNeve.push(i);
        }
    }

    return tombNeve;
}

function parosDarab(szamok: number[]):number {
    let darab: number = 0;

    for (const i of szamok){
        if (i % 2 === 0){
            darab++;
        }
    }

    return darab;
}

function fuggvenyhivasPalindrom(fuggveny:() => string):boolean{
    const szoveg:string = fuggveny();
    const szokozNelkul:string = szoveg.split(" ").join("");
    const forditott:string = szokozNelkul.split("").reverse().join("");

    return szokozNelkul === forditott;
}