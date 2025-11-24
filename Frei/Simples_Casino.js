import {
    red,
    green,
    yellow,
    blue,
    cyan,
    bold
} from "https://deno.land/std@0.218.2/fmt/colors.ts";

let money = 100;
let pleite = false;

console.log(bold("Willkommen im Casino!"));
console.log("Für eine Befehlsliste " + bold("/help") + " eingeben");
console.log("Dein Startguthaben ist " + green(money + "$"));
console.log("Viel Glück!");

// ------------------------------------------------------------
// Einsatz abfragen
// ------------------------------------------------------------
function frageEinsatz(max) {
    let einsatz;

    while (true) {
        let input = prompt("Wie viel möchtest du setzen? (Zahl, 'all', 'half')")?.toLowerCase();

        if (input === "all") return max;
        if (input === "half") return Math.floor(max / 2);

        einsatz = Number(input);

        if (isNaN(einsatz) || einsatz <= 0 || !Number.isInteger(einsatz)) {
            console.log(yellow("Ungültiger Einsatz! Bitte eine ganze Zahl größer als 0 eingeben."));
        } else if (einsatz > max) {
            console.log(yellow("Du hast nicht genug Geld! Dein Kontostand: " + max + "$"));
        } else {
            return einsatz;
        }
    }
}

// ------------------------------------------------------------
// Hauptschleife
// ------------------------------------------------------------
while (!pleite) {

    if (money <= 0) {
        console.log(red(bold("Pleite! Dein Kontostand ist 0$")));
        break;
    }

    let command = prompt("Gib einen Befehl ein:")?.toLowerCase();

    // --------------------------------------------------------
    // /money
    // --------------------------------------------------------
    if (command === "/money") {
        console.log("Kontostand: " + green(money + "$"));
        continue;
    }

    // --------------------------------------------------------
    // /stop
    // --------------------------------------------------------
    if (command === "/stop") {
        console.log("Spiel beendet. Dein Kontostand: " + green(money + "$"));
        break;
    }

    // --------------------------------------------------------
    // /help
    // --------------------------------------------------------
    if (command === "/help") {
        console.log("Befehlsliste: " + bold("/help") + ", " + bold("/stop") + ", " + bold("/money") + ", " + bold("/coinflip") + ", " + bold("/poison"));
        continue;
    }

    // --------------------------------------------------------
    // /coinflip
    // --------------------------------------------------------
    if (command === "/coinflip" || command === "/cf") {
        let einsatz = frageEinsatz(money);

        let wahl;
        while (true) {
            wahl = Number(prompt("1 oder 2?"));
            if (wahl === 1 || wahl === 2) break;
            console.log(yellow("Ungültige Wahl! Bitte 1 oder 2 eingeben."));
        }

        let zufall = Math.floor(Math.random() * 2) + 1;

        if (zufall === wahl) {
            money += einsatz;
            console.log(green("Du hast gewonnen! +" + einsatz + "$"));
        } else {
            money -= einsatz;
            console.log(red("Du hast verloren! -" + einsatz + "$"));
        }

        continue;
    }

    // --------------------------------------------------------
    // /poison
    // --------------------------------------------------------
    if (command === "/poison" || command === "/p") {
        let einsatz = frageEinsatz(money);

        console.log(blue(bold("\n---=== POISON STARTET ===---")));
        console.log("Tippe 'stop' um aufzuhören.");
        console.log("Wähle 0 oder 1.");
        console.log("Mit '/tg' kannst du deinen temporären Gewinn anzeigen.");

        money -= einsatz;
        let tempGewinn = einsatz;

        while (true) {

            console.log(cyan("\n--- Poison Status ---"));
            console.log("Kontostand:        " + green(money + "$"));
            console.log("Einsatz:           " + yellow(einsatz + "$"));
            console.log("Temporärer Gewinn: " + cyan(tempGewinn + "$"));
            console.log(cyan("---------------------"));

            let inputRaw = prompt("Wähle 0/1, 'stop' oder /tg:")?.toLowerCase();

            // Temporärer Gewinn anzeigen
            if (inputRaw?.includes("/tg")) {
                console.log("Aktueller temporärer Gewinn: " + cyan(tempGewinn + "$"));
                continue;
            }

            // Spieler steigt aus
            if (inputRaw === "stop") {
                money += tempGewinn;
                console.log(blue(bold("\n--- Poison beendet ---")));
                console.log(green(" Gewinn: +" + tempGewinn + "$"));
                console.log(" Neuer Kontostand: " + green(money + "$"));
                console.log(blue(bold("---------------------")));
                break;
            }

            // Eingabe prüfen
            let input = Number(inputRaw);
            if (isNaN(input) || (input !== 0 && input !== 1)) {
                console.log(yellow("Ungültige Eingabe! Bitte 0 oder 1."));
                continue;
            }

            // Gift
            let gift = Math.floor(Math.random() * 2);

            if (gift === input) {
                console.log(red(bold("💀 GIFT! Runde verloren.")));
                console.log("Der Einsatz wurde bereits abgezogen.");
                break;
            } else {
                tempGewinn *= 2;
                console.log(green("✔ Kein Gift! Gewinn verdoppelt: " + tempGewinn + "$"));
            }
        }

        continue;
    }

    // --------------------------------------------------------
    // unbekannter Befehl
    // --------------------------------------------------------
    console.log(yellow("Unbekannter Befehl! /help für Hilfe"));
}
