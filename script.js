let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    let a = Math.floor(Math.random() * 1000000) +1;
    console.log(a);
    let body = document.body;
    let color = "#" + a;
    document.body.style.backgroundColor = color;
    console.log(color);

})