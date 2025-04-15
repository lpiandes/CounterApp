let countEl = document.getElementById("count-el")
let num = 0;

function decrease() {
    num -= 1;
    countEl.textContent = num;
}

function increase() {
    num += 1;
    countEl.textContent = num;
}

function reset() {
    num = 0;
    countEl.textContent = num;
}
