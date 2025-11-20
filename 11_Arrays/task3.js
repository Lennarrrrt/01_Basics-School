//Aufgabe 1 im OneNote

let arr = []

for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 10);
    arr.push(random);
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);