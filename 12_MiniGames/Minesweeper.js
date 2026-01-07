let bombs = [];
let number = [];
let Flags = [];
for (let i = 1; i <= 25; i++) number[i] = i;

while (bombs.length < 3) {
    let n = Math.floor(Math.random() * 25) + 1;
    if (!bombs.includes(n)) bombs.push(n);
}

let alreadyChosen = [];
let stage = true;

let RESET = "\x1b[0m";
let YELLOW = "\x1b[33m";
let RED = "\x1b[31m";
let WHITE = "\x1b[37m";

function drawBoard() {
    for (let row = 0; row < 5; row++) {
        let line = "";
        for (let col = 1; col <= 5; col++) {
            let i = row * 5 + col;
            let display = "";
            if (Flags.includes(i)) {
                display = "🏳️ ";
            } else if (alreadyChosen.includes(i)) {
                display = YELLOW + String(number[i]).padStart(2, " ") + RESET + " ";
            } else {
                display = WHITE + String(number[i]).padStart(2, " ") + RESET + " ";
            }
            line += display;
        }
        console.log(line);
    }
}

function countBombsNear(num) {
    let bombsnear = 0;
    let row = Math.floor((num - 1) / 5);
    let col = (num - 1) % 5;

    for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
            if (r < 0 || r > 4 || c < 0 || c > 4) continue;
            let idx = r * 5 + c + 1;
            if (idx !== num && bombs.includes(idx)) bombsnear++;
        }
    }
    return bombsnear;
}

while (stage) {
    drawBoard();
    let playerinput = prompt("Enter a number between 1 and 25:");
    if (!playerinput) continue;
    let playernumber = Number(playerinput);
    if (playernumber < 1 || playernumber > 25) continue;

    let flagplace = prompt("Place a flag? (y) Remove flag? (r) Continue? (n)")?.toLowerCase();

    if (flagplace === "y") {
        if (!Flags.includes(playernumber)) Flags.push(playernumber);
        continue;
    }

    if (flagplace === "r") {
        let index = Flags.indexOf(playernumber);
        if (index !== -1) Flags.splice(index, 1);
        continue;
    }

    if (alreadyChosen.includes(playernumber)) {
        console.log("Already chosen!");
        continue;
    }

    alreadyChosen.push(playernumber);

    if (bombs.includes(playernumber)) {
        console.log(RED + "💥 YOU EXPLODED!" + RESET);
        stage = false;
    } else {
        number[playernumber] = countBombsNear(playernumber);
        console.log("There are " + number[playernumber] + " bombs near your number.");
    }
    let allFlagged = true;
    if (Flags.length === bombs.length) {
        for (let i = 0; i < bombs.length; i++) {
            if (!Flags.includes(bombs[i])) {
                allFlagged = false;
                break;
            }
        }
    } else {
        allFlagged = false;
    }

    if (allFlagged) {
        console.log("🎉 You found all bombs! You win!");
        stage = false;
    }
}

console.log("\nThe bombs were at: " + bombs.join(", "));
drawBoard();
