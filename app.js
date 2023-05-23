const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random between 0-3 - from the colors array
  const randomNumber = getRandomNumber();
  //console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// create a function to generate a random number

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

//math.random generates random numbers, which will be rounded
//up to the nearest integer and then it will be multiplied
//by the length of the colors array to return a random element/index
//in the colors array.
