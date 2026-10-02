let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    document.querySelectorAll("h1").forEach(item =>{
    item.textContent +="Thakur";
});
});