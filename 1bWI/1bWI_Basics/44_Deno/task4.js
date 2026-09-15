let age = prompt("Alter")

if (age < 20) {
    console.log("Jung")
} else if (age > 19 && age < 50) {
    console.log("Mittelalt")
} else if (age > 49 && age < 101) {
    console.log("Alt")
} else if (age > 100) {
    console.log("Antik")
} else {
    console.log("Geben sie bitte eine positive Zahl ein!!!")
}