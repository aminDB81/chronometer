let startTime;
let elapsedTime = 0;
let timerInterval;
// Format time to minute:second:milisecond
function formatTime(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const millisecondsFormatted = Math.floor((milliseconds % 1000) / 10)
    .toString()
    .padStart(2, "0");

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${millisecondsFormatted}`;
}


function updatechronometer() {
  const currentTime = Date.now();
  elapsedTime += currentTime - startTime;
  startTime = currentTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("stopwatch").textContent = formattedTime;
}
// starting chronometer
function startStopwatch() {
    startTime = Date.now();
    timerInterval = setInterval(updatechronometer, 1);
  }
