let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    let call = ganrateColor();
    h1.innerText = call;

    let text = document.querySelector("textarea");
    text.placeholder = "";
    text.style.backgroundColor = call;
});

let ganrateColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red},${green},${blue})`;

  return color;
};
