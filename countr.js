let number = document.getElementById("number");
let plus = document.getElementById("plus");
let reset = document.getElementById("reset");
let minus = document.getElementById("minus");
let count = 0;
plus.addEventListener("click", () => {
    count++;number.textContent = count;
});
reset.addEventListener("click", () => {
    count = 0;number.textContent = count;
});
minus.addEventListener("click", () => {
    count--;number.textContent = count;
});