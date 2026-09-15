let Numberamount = prompt("Wie viele Zahlen:");
let number = 0;
for (let i = 0; i < Numberamount; i++) {
    let numberinput = prompt("Gib eine Zahl ein:");
    numberinput = Number(numberinput)
    number = numberinput + number

}
let Ergebnis = number / Numberamount;
console.log("Der Durchschnitt ist:", Ergebnis);