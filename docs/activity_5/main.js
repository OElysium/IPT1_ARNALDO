function switch_mode() {
    document.body.classList.toggle("dark-mode")
}

function add() {
    let first = Number(document.getElementById("first-num").value);
    let second = Number(document.getElementById("sec-num").value);
    let sum = first + second;
    document.getElementById("sum").innerText = `The sum is ${sum}`;
}