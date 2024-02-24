let body = document.querySelector("body");



let p = document.createElement("p");
p.innerText = "Hey I'm red!";
p.style.color = "red";
body.appendChild(p);



let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.style.color = "blue";
body.appendChild(h3);



let div = document.createElement("div");
let h1 = document.createElement("h1");
let pa = document.createElement("p");
h1.innerText = "I'm in a div";
pa.innerText = "ME TOO!";
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";
body.appendChild(div);
div.appendChild(h1);
div.appendChild(pa);



let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";
body.appendChild(input);
body.appendChild(button);



button.setAttribute("id","btn");
input.placeholder = "username";



let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";



let heading = document.createElement("h1");
heading.innerHTML = `<u> DOM Practice <u>`;

heading.style.color = "purple";
body.appendChild(heading);



let para = document.createElement("p");
para.innerHTML = `<b> Javascript Practice <b>`;
body.appendChild(para);














