const start_button = document.getElementById("start");
const split_button = document.getElementById("split");
const stop_button = document.getElementById("stop");
const reset_button = document.getElementById("reset");
let time_table = document.createElement("table");
let time_thead = document.createElement("thead");
let time_tbody = document.createElement("tbody");

time_table.appendChild(time_thead);
time_table.appendChild(time_tbody);

document.getElementById("time-table").appendChild(time_table);

start_button.addEventListener("click", start);
stop_button.addEventListener("click", stop);
reset_button.addEventListener("click", reset);

let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;
let started = null;

function start() {
  if (timeBegan === null) timeBegan = new Date();
  if (timeBegan !== null) stoppedDuration += new Date() - timeStopped;
  started = setInterval(timer, 10);
}

// Split method
function split() {}

function stop() {
  timeStopped = new Date();
  clearInterval(started);
}

function reset() {
  clearInterval(started);

  stoppedDuration = 0;
  timeBegan = null;
  timeStopped = null;
  document.getElementById("display-stopwatch").innerHTML = "00:00:00.000";
  document.getElementById("display-interval").innerHTML = "00:00:00.000";
}

// Create table method
function createTable() {}

function timer() {
  let currentTime = new Date();
  console.log(currentTime, timeBegan, stoppedDuration);

  //let timeElapsed = new Date(currentTime.getTime() - timeBegan.getTime() - stoppedDuration.getTime());
  let timeElapsed = new Date(currentTime.getTime() - timeBegan.getTime());
  let hour = timeElapsed.getUTCHours();
  let min = timeElapsed.getUTCMinutes();
  let sec = timeElapsed.getUTCSeconds();
  let ms = timeElapsed.getUTCMilliseconds();

  document.getElementById("display-stopwatch").innerHTML =
    (hour > 9 ? hour : "0" + hour) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec) +
    "." +
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);

  document.getElementById("display-interval").innerHTML =
    (hour > 9 ? hour : "0" + hour) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec) +
    "." +
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}
