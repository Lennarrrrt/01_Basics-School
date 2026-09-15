import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });
let a = await rl.question("what do you want a to be: ");

if (a > 0) {
    console.log("a is positiv");
} else if (a < 0) {
    console.log("a is negativ");
} else {
    console.log("a is 0");
}