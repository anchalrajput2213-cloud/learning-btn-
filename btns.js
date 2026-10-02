let box=document.createElement("div");
let btn=document.createElement("button");
btn.textContent="click";
document.body.appendChild(btn);
btn.addEventListener("click",() =>{
    let heading=document.createElement("h1");
    heading.textContent="  hello click button";
    
    let remove_btn=document.createElement("button");
    remove_btn.textContent="button";
    heading.appendChild(remove_btn);
    document.body.appendChild(heading);

    remove_btn.addEventListener("click",() =>{
        console.log("hello everyone",heading);
        document.body.removeChild(heading);
    });
});