let arr = [4, 1, 2, 3];
arr.push(17);
arr.push(199);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);