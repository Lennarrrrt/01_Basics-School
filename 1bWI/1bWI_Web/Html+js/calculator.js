function calculate(operator) {
    const value1 = Number(document.getElementById("input1").value);
    const value2 = Number(document.getElementById("input2").value);

    let result;

    if (operator === "+") {
        result = value1 + value2;
    } else if (operator === "-") {
        result = value1 - value2;
    } else if (operator === "*") {
        result = value1 * value2;
    } else if (operator === "/") {
        result = value1 / value2;
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}