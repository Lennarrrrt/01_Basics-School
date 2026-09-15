let Ergebnis = 0;
let a = prompt("a")
let b = prompt("b")

let a1 = Number(a)
let b1 = Number(b)


for (let i = a1; i < b1; i++) {
    console.log("i:", i, "i+1:", i + 1);
    let sum = i + (i + 1);
    console.log("sum:", sum);
    Ergebnis += sum
    console.log(Ergebnis);

}
console.log(Ergebnis);