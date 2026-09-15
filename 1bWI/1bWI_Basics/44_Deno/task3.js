let numberone = prompt("nummer 1")
let symbol = prompt("zeichen")
let numbertwo = prompt("nummer 2")
if (symbol == "+") {
    console.log("Ergebnis:" + (Number(numberone) + Number(numbertwo)))
} else if (symbol == "-") {
    console.log("Ergebnis:" + (Number(numberone) - Number(numbertwo)))
} else if (symbol == "*") {
    console.log("Ergebnis:" + (Number(numberone) * Number(numbertwo)))
} else if (symbol == "/") {
    console.log("Ergebnis:" + (Number(numberone) / Number(numbertwo)))
}