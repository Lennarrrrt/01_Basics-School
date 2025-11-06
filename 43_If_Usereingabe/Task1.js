import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });
let password = await rl.question("Enter your password: ");


if (password === "jg92Ka!") {
    console.log("Access granted")
}
else console.log("Access denied");

