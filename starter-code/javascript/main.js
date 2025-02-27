var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splitsWrapper = document.getElementById("splits");

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.classList.contains("start")) {
    startChronometer();
  } else {
    stopChronometer();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.classList.contains("split")) {
    splitChronometer();
  } else {
    resetChronometer();
  }
});

function startChronometer() {
  chronometer.startClick();
  setStopBtn();
  setSplitBtn();
  printingInterval = setInterval(() => {
    printTime();
    console.log("- interval of 1 seg -");
  }, 1000);
  console.log("CHRONOMETER RUNNING");
}

function stopChronometer() {
  chronometer.stopClick();
  setStartBtn();
  setResetBtn();
  clearInterval(printingInterval);
  console.log("CHRONOMETER STOPPED");
}

function splitChronometer() {
  stopChronometer();
  setResetBtn();
  setStartBtn();
  printSplit();
  console.log("NEW SPLIT!");
}

function resetChronometer() {
  chronometer.stopClick();
  chronometer.resetClick();
  setSplitBtn();
  clearSplits();
  clearTime();
  console.log(chronometer.currentTime);
  console.log("CHRONOMETER RESET");
}

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function clearTime() {
  minDec.innerHTML = "0";
  minUni.innerHTML = "0";
  secDec.innerHTML = "0";
  secUni.innerHTML = "0";
}

function printMinutes() {
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = minutes[0];
  minUni.textContent = minutes[1];
  console.log("get min A " + minutes[0]);
  console.log("get min B " + minutes[1]);
}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.textContent = seconds[0];
  secUni.textContent = seconds[1];
  console.log("get sec A " + seconds[0]);
  console.log("get sec B " + seconds[1]);
}

function printMilliseconds() {
  // let milliseconds = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  // milDec.textContent = milliseconds[0];
  // milUni.textContent = milliseconds[1];
  // console.log("get mil A " + milliseconds[0]);
  // console.log("get mil B " + milliseconds[1]);
}

function printSplit() {
  stopChronometer();
  let splitsWrapperLi = document.createElement("li");
  splitsWrapperLi.innerHTML = chronometer.splitClick();
  splitsWrapper.append(splitsWrapperLi);
}

function clearSplits() {
  splitsWrapper.innerHTML = "";
}

function setStopBtn() {
  btnLeft.innerHTML = "STOP";
  btnLeft.classList.remove("start");
  btnLeft.classList.add("stop");
}

function setSplitBtn() {
  btnRight.innerHTML = "SPLIT";
  btnRight.classList.remove("reset");
  btnRight.classList.add("split");
}

function setStartBtn() {
  btnLeft.innerHTML = "START";
  btnLeft.classList.remove("stop");
  btnLeft.classList.add("start");
}

function setResetBtn() {
  btnRight.innerHTML = "RESET";
  btnRight.classList.remove("split");
  btnRight.classList.add("reset");
}
