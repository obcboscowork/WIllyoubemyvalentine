const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const image = document.getElementById("main-image");
const message = document.getElementById("message");

/* YES CLICK */
yesBtn.addEventListener("click", () => {

  flashRainbow();

  question.innerText = "Yayyyy!! 💘💘💘";
  message.innerText = "I knew you'd say YES 😘";

  image.src = "cat-heart.gif";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

});

/* NO CLICK */
noBtn.addEventListener("click", () => {

  noBtn.innerText = "You sure? 😏";

  let currentSize = window.getComputedStyle(yesBtn).fontSize;
  let newSize = parseFloat(currentSize) * 1.3;
  yesBtn.style.fontSize = newSize + "px";

  moveNoButton();

});

/* Move No Button */
function moveNoButton(){
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Rainbow Flash */
function flashRainbow(){
  const colors = ["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#9400d3"];
  let i = 0;

  const interval = setInterval(() => {
    document.body.style.background = colors[i];
    i = (i + 1) % colors.length;
  }, 150);

  setTimeout(() => {
    clearInterval(interval);
    document.body.style.background = "linear-gradient(120deg,#ffafbd,#ffc3a0)";
  }, 1500);
}
