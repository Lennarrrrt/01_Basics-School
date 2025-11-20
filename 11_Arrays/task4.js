//task 2 im OneNote

let arr = []
let Länge = prompt("Wie viele Zahlen sollen generiert werden?");

for (let i = 0; i < Länge; i++) {
    let random = Math.floor(Math.random() * 10);
    arr.push(random);
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let average = sum / arr.length;
console.log(average);