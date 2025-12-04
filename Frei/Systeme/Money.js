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

