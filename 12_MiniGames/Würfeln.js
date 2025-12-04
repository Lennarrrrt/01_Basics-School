let start = "";
let replay = true;
let size = prompt("Wie viele Seiten soll der Würfel haben?");
let Size = Number(size);
let money = 100;
while (replay == true) {
    let einsatz = 0;
    while (einsatz <= 0 || isNaN(einsatz) || einsatz > money) {
        let einsatz = prompt("Wie viel möchtest du setzen? Du hast " + money + "$");
        einsatz = Number(einsatz);
        if (einsatz < money || !isNaN(einsatz) || einsatz <=! 0) {
            break;
        }

        if (einsatz > money) {
            console.log("Du hast nicht genug Geld!");
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