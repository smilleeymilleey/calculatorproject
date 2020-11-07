var buttons = document.getElementsByClassName("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', click, false);
}

function click() {
  var firstbox = document.getElementById('firstbox');
  var buttonclicked = document.getElementById(this.id).value;

  firstbox.display.innerHTML = "Your Chosen button is: " + buttonclicked;
  this.disabled = true;
}
