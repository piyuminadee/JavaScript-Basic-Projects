let timer = 0;
let intervelId;
let isTimerStart = false;

function timerStart() {
  if (!isTimerStart) {
    intervelId = setInterval(() => {
      displayCount();
      document.querySelector(".js-start").innerHTML = "Stop";
      document.querySelector(".js-count").innerHTML = `${timer}`;
    }, 1000);
    isTimerStart = true;
  } else {
    clearInterval(intervelId);
    isTimerStart = false;
    document.querySelector(".js-start").innerHTML = "Start";
  }
}
document.querySelector(".js-start").addEventListener("click", () => {
  timerStart();
});

function displayCount() {
  timer++;
  console.log(timer);
}

document.querySelector(".js-restrt").addEventListener("click", () => {
  timer = 0;
  document.querySelector(".js-count").innerHTML = `${timer}`;
});
