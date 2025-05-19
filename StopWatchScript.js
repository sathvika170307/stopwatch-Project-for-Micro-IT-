// script.js
let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;

document.getElementById("start").addEventListener("click", () => {
  if (interval !== null) return;
  interval = setInterval(updateTime, 1000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.innerText = "00:00:00";
});

function updateTime() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  display.innerText = 
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
  return unit < 10 ? "0" + unit : unit;
}
