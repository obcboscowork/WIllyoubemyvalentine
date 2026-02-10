document.addEventListener("DOMContentLoaded", () => {

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const cat = document.getElementById("cat");
const music = document.getElementById("bgMusic");
const message = document.getElementById("message");

// NO button runs
noBtn.addEventListener("mouseover", () => {
  const x = Math.random()*200 - 100;
  const y = Math.random()*200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES clicked
yesBtn.addEventListener("click", () => {
  message.innerHTML = "Yayyy! I knew you'd say yes! 💖🥰";
  cat.src = "./cat-heart.png";
  music.play();
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

});
