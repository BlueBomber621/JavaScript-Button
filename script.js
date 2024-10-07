const Counter = document.querySelector("#clicks");
const Button = document.querySelector(".button");
let interval;
let Number = 0;

function btnPressed() {
  Number++;
  Counter.textContent = Number;
}
function btnPressed() {
  Number++;
  Counter.textContent = Number;
}

Button.addEventListener("mousedown", () => {
  interval = setInterval(() => {
    // Button Pressed and Held
    btnPressed();
  }, 100);
});

Button.addEventListener("mouseup", () => {
  clearInterval(interval);
});
