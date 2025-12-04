let resume = true;
let wins = 0;
let losses = 0;
let games = 0;
while (resume == true) {
    console.log("Stats: " + wins + " Wins, " + losses + " Losses, " + games + " Games played.");
    let humaninput = prompt("Rock,Paper,Scissors");
    console.log("Stats: " + wins + " Wins, " + losses + " Losses, " + games + " Games played.");
    let botinput = Math.floor(Math.random() * 3) + 1;
    if (botinput === 1) {
        (botinput) = "Rock";
    }
    else if (botinput === 2) {
        botinput = "Paper";
    } else if (botinput === 3) {
        botinput = "Scissors";
    }

    if (humaninput === botinput) {
        console.log("Unentschieden! Beide haben " + botinput + " gewählt.");
    }
    if ((humaninput === "Rock" && botinput === "Scissors") || (humaninput === "Paper" && botinput === "Rock") || (humaninput === "Scissors" && botinput === "Paper")) {
        console.log("Du hast gewonnen! Der Bot hat " + botinput + " gewählt."
        )
        wins += 1

    }
    else if ((humaninput === "Rock" && botinput === "Paper") || (humaninput === "Paper" && botinput === "Scissors") || (humaninput === "Scissors" && botinput === "Rock")) {
        console.log("Du hast verloren! Der Bot hat " + botinput + " gewählt.")
        losses += 1
    }
    let again = prompt("Möchtest du nochmal spielen? (ja/nein)");
    if (again === "ja" || again === "j") {
        resume = true;
    } else {
        resume = false;
    }
    games += 1;
}