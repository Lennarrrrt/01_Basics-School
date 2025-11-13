let temperature = prompt("How warm is it outside?");
if (temperature < -10) {
    console.log("stay inside!");
}
else if (temperature <= 10 && temperature >= -10) {
    console.log("Warm clothes");
}
else if (temperature > 10 && temperature <= 20) {
    console.log("Go outside");
}
else if (temperature > 20 && temperature <= 30) {
    console.log("Go swimming");
} else if (temperature > 30)
    console.log("die or kühlbox");