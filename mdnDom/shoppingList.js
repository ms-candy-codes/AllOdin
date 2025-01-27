const listHead = document.querySelector("ul");
const Item = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    let itemValue = Item.value;
    Item.value = "";

    const listItem = document.createElement("li");

    const spans = document.createElement("span");
    const btn2 = document.createElement("button");

    listItem.appendChild(spans);
    listItem.appendChild(btn2);

    btn2.textContent = "Delete";
    spans.textContent = itemValue;
    listHead.appendChild(listItem);

    btn2.addEventListener("click", ()=>{
        listHead.removeChild(listItem);
    });

    Item.focus();
    
});