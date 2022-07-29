const time_element = document.querySelector(".stopwatch .time");

const start_button = document.getElementById("start");
const split_button = document.getElementById("split");
const stop_button = document.getElementById("stop");
const reset_button = document.getElementById("reset");

let seconds = 0;
let interval = null;

start_button.addEventListener("click", start);
stop_button.addEventListener("click", stop);
reset_button.addEventListener("click", reset);

function timer() {
  seconds++;

  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  /*
  if (hrs < 10) hrs = "0" + hrs;
  if (mins < 10) mins = "0" + mins;
  if (secs < 10) secs = "0" + secs;

  time_element.innerText = `${hrs}:${mins}:${secs}`;
  */
  hour = timeElapsed.getUTCHours();
  min = timeElapsed.getUTCMinutes();
  sec = timeElapsed.getUTCSeconds();
  ms = timeElapsed.getUTCMilliseconds();

  document.getElementById("display-area").innerHTML =
    (hour > 9 ? hour : "0" + hour) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec) +
    "." +
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}

// timer();

function start() {
  if (interval) return;
  interval = setInterval(timer, 10);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  seconds = 0;
  time_element.innerText = "00:00:00";
}
