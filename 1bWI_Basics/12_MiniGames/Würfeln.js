let start = "";
let replay = true;
let size = prompt("Wie viele Seiten soll der Würfel haben?");
let Size = Number(size);
let money = 100;
let einsatz = 0;
while (replay == true) {
    let einsat = 0;
    while (einsat <= 0 || isNaN(einsat) || einsat > money) {
        let einsat = prompt("Wie viel möchtest du setzen? Du hast " + money + "$");
        let einsatz = Number(einsat);
        if (einsatz < money || !isNaN(einsatz) || einsatz <= !0) {
            break;
        }

        if (einsatz > money) {
            console.log("Du hast nicht genug Geld!");
            continue;
        }
        if (isNaN(einsatz)) {
            console.log("Bitte gib eine Zahl ein!");
            continue;
        }
    }
    let start = prompt("Drücke Enter zum Würfeln");
    let wuerfelBot = Math.floor(Math.random() * Size) + 1;
    let wuerfelSpieler = Math.floor(Math.random() * Size) + 1;
    console.log("Du hast" + " " + wuerfelSpieler);
    console.log("Der Bot hat" + " " + wuerfelBot);
    if (wuerfelSpieler > wuerfelBot) {
        money += einsatz;
        console.log("Du hast gewonnen!");
    } else if (wuerfelSpieler < wuerfelBot) {
        money -= einsatz;
        console.log("Der Bot hat gewonnen!");
    }
    console.log("Möchtest du nochmal würfeln? (ja/nein)");
    let antwort = prompt("");
    if (antwort == "ja" || antwort == "j") {
        replay = true;
    } else {
        replay = false;
    }
}