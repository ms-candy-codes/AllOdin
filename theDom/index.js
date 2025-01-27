const container = document.querySelector("#container");

const para1 = document.createElement("p");
para1.classList.add("p1");
para1.textContent = "Hey I'm red!";
para1.style.color = "red";

const heading1 = document.createElement("h3");
heading1.classList.add("firstHeading");
heading1.textContent = "I'm blue h3!";
heading1.style.color = "blue";

const firstDiv = document.createElement("div");
firstDiv.style.borderColor = "black";
firstDiv.style.border = "2px solid";
firstDiv.style.backgroundColor = "pink";

container.appendChild(para1);
container.appendChild(heading1);
container.appendChild(firstDiv);

const heading2 = document.createElement("h1");
heading2.textContent = "I'm in a div";

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

firstDiv.appendChild(heading2)
firstDiv.appendChild(para2);