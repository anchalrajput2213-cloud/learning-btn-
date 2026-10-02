let box = document.createElement("div");
box.style.height = "200px";
box.style.width = "200px";
box.style.background ="skyblue";
box.textContent = "click";
document.body.appendChild(box);

box .addEventListener( "click",() => {
    let btn = document.createElement("button");
    btn.textContent ="button";
    box.appendChild(btn);
} );