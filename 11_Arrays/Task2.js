let arr = ["Susi", "Paula", "Hans", "Susi", "Paula", "Hans"];


let names = "";
for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 2) {
        names += arr[i] + " " + "und" + " ";
    } else if (i === arr.length - 1)
        names += arr[i];
    else
        names += arr[i] + ", ";
}

console.log(names);
