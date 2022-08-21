function setBackgroundForPrimeNumbers() {
  document.getElementById("n2").style.backgroundColor = "limegreen";
  document.getElementById("n3").style.backgroundColor = "limegreen";
  document.getElementById("n5").style.backgroundColor = "limegreen";
  document.getElementById("n7").style.backgroundColor = "limegreen";
}

function setBackgroundForCompositeNumbers() {
  document.getElementById("n4").style.backgroundColor = "blue";
  document.getElementById("n6").style.backgroundColor = "blue";
  document.getElementById("n8").style.backgroundColor = "blue";
  document.getElementById("n9").style.backgroundColor = "blue";
  document.getElementById("n10").style.backgroundColor = "blue";
}

function clearStyles() {
  document.getElementById("n1").style.backgroundColor = null;
  document.getElementById("n2").style.backgroundColor = null;
  document.getElementById("n3").style.backgroundColor = null;
  document.getElementById("n5").style.backgroundColor = null;
  document.getElementById("n7").style.backgroundColor = null;
  document.getElementById("n4").style.backgroundColor = null;
  document.getElementById("n6").style.backgroundColor = null;
  document.getElementById("n8").style.backgroundColor = null;
  document.getElementById("n9").style.backgroundColor = null;
  document.getElementById("n10").style.backgroundColor = null;
}
function setBackgroundForOdds() {
  document.getElementById("n1").style.backgroundColor = "lemonChiffon";
  document.getElementById("n3").style.backgroundColor = "lemonChiffon";
  document.getElementById("n5").style.backgroundColor = "lemonChiffon";
  document.getElementById("n7").style.backgroundColor = "lemonChiffon";
  document.getElementById("n9").style.backgroundColor = "lemonChiffon";
}

function setBackgroundForEvens() {
  document.getElementById("n4").style.backgroundColor = "lightSkyBlue";
  document.getElementById("n6").style.backgroundColor = "lightSkyBlue";
  document.getElementById("n8").style.backgroundColor = "lightSkyBlue";
  document.getElementById("n9").style.backgroundColor = "lightSkyBlue";
  document.getElementById("n10").style.backgroundColor = "lightSkyBlue";
}

window.onload = function() {
  document.querySelector('button#prime').onclick = function() {
    clearStyles();
    setBackgroundForPrimeNumbers();
  };

  document.querySelector('button#composite').onclick = function() {
    clearStyles();
    setBackgroundForCompositeNumbers();
  };

  document.querySelector('button#allNums').onclick = function() {
    clearStyles();
    setBackgroundForCompositeNumbers();
    setBackgroundForPrimeNumbers();
  }

  document.querySelector('button#oddNums').onclick = function () {
    clearStyles();
    setBackgroundForOdds();
  }

  document.querySelector('button#evenNums').onclick = function () {
    clearStyles();
    setBackgroundForEvens();
  }
};