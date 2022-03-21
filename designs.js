//color and size variables
var height;
var width;
var color = "colorPicker";

//DOM Elements
const table = document.querySelector("#pixelCanvas");
const pickColor = document.querySelector("#colorPicker");
const size = document.querySelector("#sizePicker");
//event listener
size.addEventListener("submit", function (event) {
  event.preventDefault();
  width = document.getElementById("inputHeight").value;
  height = document.getElementById("inputWidth").value;
  makeGrid(height, width);
});
// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
  table.innerHTML = "";
  for (let row = 0; row < width; row++) {
    let newRow = table.insertRow();
    for (let cell = 0; cell < height; cell++) {
      let newCell = newRow.insertCell();
      newCell.onclick = changeColor;
    }
  }
}

//change color
function changeColor() {
  this.style.background = pickColor.value;
}
