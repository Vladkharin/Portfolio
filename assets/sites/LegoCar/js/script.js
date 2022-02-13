const smallBlock = document.querySelector("#small-block");
const bigBlock = document.querySelector("#big-block");
const showBtn = document.getElementById("show-btn");
const hideBtn = document.getElementById("hide-btn");

showBtn.addEventListener("click", () => {
  smallBlock.classList.add("offer__block_active");
  bigBlock.classList.remove("offer__block_active");
});
hideBtn.addEventListener("click", () => {
  bigBlock.classList.add("offer__block_active");
  smallBlock.classList.remove("offer__block_active");
});
