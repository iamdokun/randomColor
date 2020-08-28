let colorBtn = document.getElementById("btn");
let display = document.getElementById("contain");
let colorTextDisplay = document.getElementById("colorText");
colorBtn.addEventListener("click", randomColorBtn);

function randomColorBtn() {
    let color = ['red', 'yellow', 'blue', 'pink', 'gray', 'orange', 'green', 'brown'];
    let num = Math.floor(Math.random() * color.length);
    let randomColor = color[num];
    display.style.backgroundColor = randomColor;
    colorTextDisplay.innerHTML = randomColor.toUpperCase();
}