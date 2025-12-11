let bombs = [];

while (bombs.length < 3) {
    let n = Math.floor(Math.random() * 25) + 1;
    if (!bombs.includes(n)) {
        bombs.push(n);
    }
}

