//task3 im oneNote

let arr = []
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 10);
    arr.push(random);
} arr = Math.max(...arr);
console.log(arr);