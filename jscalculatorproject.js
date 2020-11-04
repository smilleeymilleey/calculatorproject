var cars = ["Test loop1", "test loop2", "test loop3", "Test loop4", "Test loop5", "Test loop6"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
