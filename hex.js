const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #ff15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// click events and call back functions
btn.addEventListener("click", function () {
  //create a hexColor
  let hexColor = "#";
  //loop it 6 times to generate hexadecimal color
  for (let i = 0; i < 6; i++) {
    //invoke the function
    hexColor += hex[getRandomNumber()];
  }
  //The textContent property in JavaScript is used to
  //get or set the text content of an HTML element.
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// set up function to return a random number
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
