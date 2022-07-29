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
split_button.addEventListener("click", split);

let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;
let started = null;

// For splitting time
let intervalStart = null;
let intervalEnd = null;

// Can't use these buttons before starting.
document.getElementById("stop").disabled = true;
document.getElementById("split").disabled = true;

function start() {
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("reset").disabled = true;
  document.getElementById("split").disabled = false;
  if (timeBegan === null) {
	  timeBegan = new Date();
	  intervalStart = new Date();
  } 

  if (timeStopped !== null){
	stoppedDuration += new Date() - timeStopped;
  }

  started = setInterval(timer, 10);
}



function stop() {
  document.getElementById("start").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("split").disabled = true;
  document.getElementById("reset").disabled = false;
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

function split() {
	// if (intervalStart) {
	// 	let now = new Date();
	// 	if (split == null) {

	// 	}

	// }

	// let currentTime = new Date();
	// let start = new Date(currentTime - intervalStart - stoppedDuration);
  	// let hour = start.getUTCHours();
  	// let min = start.getUTCMinutes();
  	// let sec = start.getUTCSeconds();
  	// let ms = start.getUTCMilliseconds();
	// console.log(
	// 	(hour > 9 ? hour : "0" + hour) +
	// 	":" +
	// 	(min > 9 ? min : "0" + min) +
	// 	":" +
	// 	(sec > 9 ? sec : "0" + sec) +
	// 	"." +
	// 	(ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms)
	// )

  	// document.getElementById("display-interval").innerHTML = "00:00:00.000";
  	// document.getElementById("display-interval").innerHTML =
  	//   (hour > 9 ? hour : "0" + hour) +
  	//   ":" +
  	//   (min > 9 ? min : "0" + min) +
  	//   ":" +
  	//   (sec > 9 ? sec : "0" + sec) +
  	//   "." +
  	//   (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}

// Create table method
function createTable() {
  // Activity, Interval, Total, Time Recorded
}

function renderTime(t1, t2) {
  // let currentTime = new Date();
  // let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);
  // let hour = timeElapsed.getUTCHours();
  // let min = timeElapsed.getUTCMinutes();
  // let sec = timeElapsed.getUTCSeconds();
  // let ms = timeElapsed.getUTCMilliseconds();
}

function parseTime(t) {
  // document.getElementById("display-stopwatch").innerHTML =
  //   (hour > 9 ? hour : "0" + hour) +
  //   ":" +
  //   (min > 9 ? min : "0" + min) +
  //   ":" +
  //   (sec > 9 ? sec : "0" + sec) +
  //   "." +
  //   (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}


function timer() {
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);
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
