const red = document.getElementById("red");
const blue =document.getElementById("blue");
const green =document.getElementById("green");
const Yellow=document.getElementById("Yellow");
const Purple =document.getElementById("Purple");
red.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
});

blue.addEventListener("click", () => {
    document.body.style.backgroundColor = "blue";
});

green.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
});

Yellow.addEventListener("click", () => {
    document.body.style.backgroundColor = "Yellow";
});
Purple.addEventListener("click", () => {
    document.body.style.backgroundColor = "Purple";
});

