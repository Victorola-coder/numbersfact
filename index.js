import "./style.css";

let fact = document.querySelector("#facts");
let factInput = document.querySelector("#factInput");
let factOutput = document.querySelector("#factsout");

factInput.addEventListener("input", getFacts);

function getFacts() {
  let number = factInput.value;

  fetch("http://numbersapi.com/" + number)
    .then((response) => response.text())
    .then((data) => {
      if (number !== "") {
        // console.log(data);
        fact.style.display = "block";
        factOutput.innerHTML = data;
      }
    })
    .catch((err) => console.log(err));
}
