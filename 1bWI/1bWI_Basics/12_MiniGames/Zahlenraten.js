let Number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessed = false;

while (guessed == false) {
    for (let i = 0; i < 10; i++) {
        let userGuess = prompt("Gib eine Zahl zwischen 1 und 100 ein:");
        attempts += 1;
        if (userGuess == Number) {
            console.log("Herzlichen Glückwunsch! Du hast die Zahl " + Number + " in " + attempts + " Versuchen erraten.");
            guessed = true;
            break;
        } else if (userGuess < Number) {
            console.log("Die gesuchte Zahl ist größer als " + userGuess + ".");
        } else if (userGuess > Number) {
            console.log("Die gesuchte Zahl ist kleiner als " + userGuess + ".");
        }
    }
    if (guessed == false) {
        console.log("Du hast alle 10 Versuche verbraucht. Die gesuchte Zahl war " + Number + ".");
        let playAgain = prompt("Möchtest du nochmal spielen? (ja/nein)");
        if (playAgain.toLowerCase() == "ja" || playAgain.toLowerCase() == "j") {
            Number = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
        } else {
            break;
        }
    }
}