// Select color input
// Select size input
var height;
var width;
var color = "colorPicker";
// When size is submitted by the user, call makeGrid()
//DOM ELEMents
const table = document.querySelector("#pixelCanvas");
const pickColor = document.querySelector("#colorPicker");
const size = document.querySelector("#sizePicker");

size.addEventListener("submit", function (event) {
  event.preventDefault();
  width = document.getElementById("inputHeight").value;
  height = document.getElementById("inputWidth").value;
  makeGrid(height, width);
});
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
