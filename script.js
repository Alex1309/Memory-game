const grid = () => Array.from(document.getElementsByClassName("c"));
var pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var pairsNot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var result;
let i = 0;
let firstEvent = "";
let total = 0;
var inicialDate = 0;
var timeout = 0;

const bToNum = function (elem) {
  return Number.parseInt(elem.id.replace("b", ""));
}
function WinFunction() {
  var txt;
  var r = confirm("Ganaste! Tu tiempo fue " + result);
  if (r == true) {
    grid().forEach((elem) => removePairColors(elem));
    pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
    pairsNot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    putPairNumbers();
    enableListeners();
    starClock();
    i = 0;
    total = 0;
    timeout = 0;
    firstEvent = "";
  } else {
  }
}
const clickFn = function ($event) {
  putPairColors(event.target);

  i++;
  if (i == 1) {
    firstEvent = event.target;
  }
  if (i == 2) {
    if (
      grid()[bToNum(event.target)].value !== grid()[bToNum(firstEvent)].value
    ) {
      i = 0;
      initialColor(event.target);
      initialColor(firstEvent);
    } else if (
      grid()[bToNum(event.target)].value === grid()[bToNum(firstEvent)].value
    ) {
      i = 0;
      disableListeners(event.target);
      disableListeners(firstEvent);
      total++;
    }
  }
  if (total === 8) {
    stopClock();
    setTimeout("WinFunction()", 1000);
  }
}

function stopClock() {
  clearTimeout(timeout);
  timeout = 0;
}
function starClock() {
  inicialDate = new Date().getTime();
  starting();
}
function starting() {
  var actualDate = new Date().getTime();
  var diff = new Date(actualDate - inicialDate);
  result =
    putCero(diff.getUTCHours()) +
    ":" +
    putCero(diff.getUTCMinutes()) +
    ":" +
    putCero(diff.getUTCSeconds());
  document.getElementById("time").innerHTML = result;
  resulTime = result;
  timeout = setTimeout("starting()", 1000);
}

function putCero(Time) {
  if (Time < 10) {
    return "0" + Time;
  } else {
    return Time;
  }
}

const putPairNumbers = function () {
  while (pairs.length != 0) {
    let elem = Math.floor(Math.random() * 16 + 0);
    while (pairsNot[elem] !== 0) {
      elem = Math.floor(Math.random() * 16 + 0);
    }
    console.log(elem);
    grid()[elem].value = pairs[0];
    pairs.shift();
    pairsNot[elem] = 1;
  }
};
const removePairColors = function (elem) {
  if (grid()[bToNum(elem)].value === 1) {
    grid()[bToNum(elem)].classList.remove("colorUno");
    grid()[bToNum(elem)].classList.add("blanco");
  } else if (grid()[bToNum(elem)].value === 2) {
    grid()[bToNum(elem)].classList.remove("colorDos");
    grid()[bToNum(elem)].classList.add("blanco");
  } else if (grid()[bToNum(elem)].value === 3) {
    grid()[bToNum(elem)].classList.remove("colorTres");
    grid()[bToNum(elem)].classList.add("blanco");
  } else if (grid()[bToNum(elem)].value === 4) {
    grid()[bToNum(elem)].classList.remove("colorCuatro");
    grid()[bToNum(elem)].classList.add("blanco");
  } else if (grid()[bToNum(elem)].value === 5) {
    grid()[bToNum(elem)].classList.remove("colorCinco");
    grid()[bToNum(elem)].classList.add("blanco");
  } else if (grid()[bToNum(elem)].value === 6) {
    grid()[bToNum(elem)].classList.remove("colorSeis");
    grid()[bToNum(elem)].classList.add("blanco");
  } else if (grid()[bToNum(elem)].value === 7) {
    grid()[bToNum(elem)].classList.remove("colorSiete");
    grid()[bToNum(elem)].classList.add("blanco");
  } else if (grid()[bToNum(elem)].value === 8) {
    grid()[bToNum(elem)].classList.remove("colorOcho");
    grid()[bToNum(elem)].classList.add("blanco");
  }
};
const putPairColors = function (elem) {
  if (grid()[bToNum(elem)].value === 1) {
    grid()[bToNum(elem)].classList.remove("blanco");
    grid()[bToNum(elem)].classList.add("colorUno");
  } else if (grid()[bToNum(elem)].value === 2) {
    grid()[bToNum(elem)].classList.remove("blanco");
    grid()[bToNum(elem)].classList.add("colorDos");
  } else if (grid()[bToNum(elem)].value === 3) {
    grid()[bToNum(elem)].classList.remove("blanco");
    grid()[bToNum(elem)].classList.add("colorTres");
  } else if (grid()[bToNum(elem)].value === 4) {
    grid()[bToNum(elem)].classList.remove("blanco");
    grid()[bToNum(elem)].classList.add("colorCuatro");
  } else if (grid()[bToNum(elem)].value === 5) {
    grid()[bToNum(elem)].classList.remove("blanco");
    grid()[bToNum(elem)].classList.add("colorCinco");
  } else if (grid()[bToNum(elem)].value === 6) {
    grid()[bToNum(elem)].classList.remove("blanco");
    grid()[bToNum(elem)].classList.add("colorSeis");
  } else if (grid()[bToNum(elem)].value === 7) {
    grid()[bToNum(elem)].classList.remove("blanco");
    grid()[bToNum(elem)].classList.add("colorSiete");
  } else if (grid()[bToNum(elem)].value === 8) {
    grid()[bToNum(elem)].classList.remove("blanco");
    grid()[bToNum(elem)].classList.add("colorOcho");
  }
};
const initialColor = function (elem) {
  setTimeout(() => {
    grid()[bToNum(elem)].classList.add("blanco");
  }, 1000);
};
const enableListeners = () =>
  grid().forEach((elem) => elem.addEventListener("click", clickFn));
const disableListeners = (elem) =>
  grid()[bToNum(elem)].removeEventListener("click", clickFn);
putPairNumbers();
enableListeners();
starClock();
