function buttonClick(number) {
  document.getElementById("screen").value += number;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}
function greetingOutFunction() {
  document.getElementById("greatiText").style.display = "none";
}
function greetingInFunction() {
  document.getElementById("greatiText").style.display = "block";
}

function enter() {
  let valueOnScreen = document.getElementById("screen").value;
  let password = "1234";
  if (valueOnScreen == password) {
    // document.getElementById("errorLabel").style.display = "none";
    document.getElementById("container").style.display = "none";
    let fadein = setTimeout(greetingInFunction, 1000);
    let fadeout = setTimeout(greetingOutFunction, 2000);
  } else {
    document.getElementById("errorLabel").style.display = "block";
    document.getElementById("container").style.boxShadow =
      " 0px 0px 5px 2px red";
  }
  //   console.log(valueOnScreen);
}
